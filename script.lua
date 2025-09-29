state = {}

self.max_typed_number=99

ranges = {
  triangle={ color=Color(0.10,0.10,0.09), range=1 },
  circle  ={ color=Color(1,1,1),           range=2 },
  square  ={ color=Color(0,0.36,0.62),     range=3 },
  pentagon={ color=Color(0.80,0.08,0.09),  range=6 }
}

triangle = "(1\")"
circle   = "(2\")"
square   = "(3\")"
pentagon = "(6\")"

function textColorXml(color, text) return string.format("<textcolor color=\"#%s\">%s</textcolor>", color, text) end
function textColorMd(color, text)  return string.format("[%s]%s[-]", color, text) end

secrets = { "ktcnid-status-hiddenRole" }

text_subs = {
  ["1&&"]=textColorXml("000000", triangle),
  ["2&&"]=textColorXml("ffffff", circle),
  ["3&&"]=textColorXml("1E87FF", square),
  ["6&&"]=textColorXml("DA1A18", pentagon),
  ["%(R%)"]=textColorXml("1E87FF","R"),
  ["%(M%)"]=textColorXml("F4641D","M")
}

md_subs = {
  ["1&&"]=textColorMd("000000", triangle),
  ["2&&"]=textColorMd("ffffff", circle),
  ["3&&"]=textColorMd("1E87FF", square),
  ["6&&"]=textColorMd("DA1A18", pentagon),
  ["%(R%)"]=textColorMd("1E87FF","R"),
  ["%(M%)"]=textColorMd("F4641D","M")
}

function secretVisibility() return "" end
function hideSecrets() local sv=secretVisibility() for _,v in ipairs(secrets) do self.UI.setAttribute(v,"visibility",sv) end end

modelMeasureLineRadius=0.05
base={}
baseLineRadius=0.0125
baseLineHeight=0.2

rangeShown=false
measureColor=nil
measureRange=0
lastRange=-1

parsedWeaponsCache={}
weaponBtnMap={}

local HEX_R="1E87FF"
local HEX_M="F4641D"

-- авто-гидратация W/wounds
local function parseWFromDesc()
  local desc = self.getDescription() or ""
  local n = desc:match("%[84E680%]W%[%-%]%s*%[ffffff%]%s*(%d+)")
        or desc:match("%[84E680%]WOUNDS%[%-%]%s*%[ffffff%]%s*(%d+)")
  if n then return tonumber(n) end
end

local function parseCurMaxFromName()
  local name=self.getName() or ""
  local brace=name:match("%b{}")
  if not brace then return nil,nil end
  local cur,maxv=brace:match("{%s*(%d+)%s*/%s*(%d+)%s*}")
  if cur and maxv then return tonumber(cur), tonumber(maxv) end
  return nil,nil
end

local function hydrateStats()
  state.stats=state.stats or {}
  local prevW=state.stats.W or 0
  local curW=state.wounds
  local wDesc=parseWFromDesc()
  local nCur,nMax=parseCurMaxFromName()
  local W=wDesc or nMax or prevW or 0
  if W>0 then
    state.stats.W=W
    if not curW or curW==0 or curW>W then
      if nCur and nCur>0 and nCur<=W then state.wounds=nCur else state.wounds=W end
    end
  end
end

-- уведомление
function notify(p, msg)
  local color=nil
  if type(p)=="string" then color=p elseif type(p)=="userdata" and p.color then color=p.color end
  if color and Player[color] then Player[color].broadcast(msg) else print(msg) end
end

local function getPlayerByColor(c)
  if type(c)=="userdata" and c.color then return c end
  if type(c)=="string" then
    local ok,pl=pcall(function() return Player[c] end)
    if ok and pl and pl.color then return pl end
    for _,p in ipairs(Player.getPlayers()) do if p.color==c then return p end end
  end
  return nil
end

function onNumberTyped(pc_color,n)
  rangeShown = n>0
  measureColor = Color.fromString(pc_color)
  measureRange = n
  local scaleFactor = 1/self.getScale().x
  if lastRange==measureRange then
    local sphereRange = getCircleVectorPoints(measureRange - modelMeasureLineRadius + 0.05, 0.125, 1)[1].x*2/scaleFactor
    Physics.cast({origin=self.getPosition(),direction={0,1,0},type=2,size={sphereRange,sphereRange,sphereRange},max_distance=0,debug=true})
  end
  lastRange=measureRange
  refreshVectors()
  if Player[pc_color] then Player[pc_color].broadcast(string.format('%d"',measureRange)) end
end

function saveState() self.script_state=JSON.encode(state) end
function loadState() state=JSON.decode(self.script_state) or {} end

function savePosition(p,r) state.savePos={position=p or self.getPosition(),rotation=r or self.getRotation()} saveState() self.highlightOn(Color(0.19,0.63,0.87),0.5) end
function loadPosition() local sp=state.savePos if sp then self.setPositionSmooth(sp.position,false,true) self.setRotationSmooth(sp.rotation,false,true) self.highlightOn(Color(0.87,0.43,0.19),0.5) end end

function refreshWounds()
  hydrateStats()
  local w=state.wounds or 0
  local m=(state.stats and state.stats.W) or 0
  local uiwstring=function() if w==0 then return textColorXml("DA1A18","DEAD") end return string.format("%d/%d",w,m) end
  local namewstring=function()
    if w==0 then return "{[DA1A18]DEAD[-]}"
    elseif m>0 and w<m/2 then return string.format("{[9A1111]*[-]%d/%d[9A1111]*[-]}",w,m) end
    return string.format("{%d/%d}",w,m)
  end
  self.UI.setValue("ktcnid-status-wounds",uiwstring())
  local nname=self.getName()
  if string.find(nname,"%b{}")==nil then nname="{} "..nname else nname=string.sub(nname,string.find(nname,"%b{}"),100) end
  local norder="[FF5500]"
  if state.ready==false then norder="[999999]" end
  if state.order=="Conceal" then norder=norder.."C" else norder=norder.."E" end
  norder=norder.."[-] "
  self.setName(string.gsub(nname,"%b{}",norder..namewstring()))
end

function callback_attachment(player,value,id)
  local attachment=id:gsub("ktcnid[-]status[-]","")
  local must=false
  if not state.attachments or not state.attachments[attachment] then return end
  if state.attachments[attachment].active==false or state.attachments[attachment].removable==false then return end
  if state.attachments[attachment].stackable then
    local d=(value=="-1") and 1 or -1
    state.attachments[attachment].stack=math.max(0,(state.attachments[attachment].stack or 0)+d)
    if state.attachments[attachment].stack==0 then state.attachments[attachment].active=false end
    must=true
  else
    if value=="-2" then state.attachments[attachment].active=false must=true end
  end
  if must then saveState() refreshUI() end
end

function callback_secret(player,value,id)
  local attachment=id:gsub("ktcnid[-]status[-]","")
  if value=="-1" then state.attachments[attachment].active=not state.attachments[attachment].active end
  saveState() refreshUI()
end

function callback_orders(player,value,id)
  if value=='-1' then
    if state.ready==nil or state.ready then state.ready=false else state.ready=true end
  else
    if state.order=="Engage" then state.order="Conceal" else state.order="Engage" end
  end
  refreshUI() refreshWounds() saveState()
end

-- парсинг оружия
local function parseWeaponsFromDescription()
  local desc=self.getDescription() or ""
  local weapons,lines={},{}
  for line in string.gmatch(desc,"[^\r\n]+") do table.insert(lines,line) end

  local function nFrom(line, key1, key2)
    local v = line:match("%[84E680%]"..key1.."%[%-%]%s*([%d]+)")
           or (key2 and line:match("%[84E680%]"..key2.."%[%-%]%s*([%d]+)")) or nil
    return v and tonumber(v) or nil
  end
  local function sFrom(line, key1, key2)
    return line:match("%[84E680%]"..key1.."%[%-%]%s*([%d/]+)")
        or (key2 and line:match("%[84E680%]"..key2.."%[%-%]%s*([%d/]+)")) or ""
  end

  local i=1
  while i<=#lines do
    local line=lines[i]
    local t=nil
    if line:find("%[1E87FF%]%s*R%[%-%]") then t="R"
    elseif line:find("%[F4641D%]%s*M%[%-%]") then t="M" end

    if t then
      local name=line
        :gsub("^%s*","")
        :gsub("%[1E87FF%]%s*R%[%-%]%s*","")
        :gsub("%[F4641D%]%s*M%[%-%]%s*","")

      local A,BS,D,SR="",0,"",""
      if i+1<=#lines then
        local l2=lines[i+1]
        A  = nFrom(l2,"A","ATK") or 0
        BS = nFrom(l2,"WS/BS","HIT") or 0
        D  = sFrom(l2,"D","DMG") or ""
      end
      if i+2<=#lines then
        local l3=lines[i+2]
        if l3:find("%[84E680%]SR%[%-%]") or l3:find("%[84E680%]WR%[%-%]") then
          SR = l3
            :gsub("^%s*","")
            :gsub("%[84E680%]SR%[%-%]%s*:%s*","")
            :gsub("%[84E680%]WR%[%-%]%s*:%s*","")
        end
      end

      table.insert(weapons,{
        type=t, name=name,
        stats={
          ["A"]=A, ["ATK"]=A,
          ["WS/BS"]=BS, ["HIT"]=BS,
          ["D"]=D, ["DMG"]=D,
          ["SR"]=SR, ["WR"]=SR
        }
      })
    end
    i=i+1
  end
  return weapons
end

function callback_weaponBtn(player_color,_value,id)
  local idx=weaponBtnMap[id] if not idx then return end
  local weapon=parsedWeaponsCache[idx] if not weapon then return end

  local prefix=(weapon.type=="R") and "[1E87FF]R[-]" or "[F4641D]M[-]"
  local name=prefix.." "..weapon.name
  local A=weapon.stats["A"] or 0
  local bs=weapon.stats["WS/BS"] or 0
  if isInjured()==true and bs>0 then bs=bs+1 end
  local D=weapon.stats["D"] or ""
  local SR=weapon.stats["SR"] or ""
  notify(player_color,string.format("Profile: %s  [84E680]A[-] %d  [84E680]WS/BS[-] %d+  [84E680]D[-] %s",name,A,bs,D))
  if SR~="" then notify(player_color,"[84E680]SR[-]: "..SR) end

  local roller=nil
  for _,obj in ipairs(getAllObjects()) do if obj.hasTag("KTUIDiceRoller") then roller=obj end end
  if not roller then return end
  local p=getPlayerByColor(player_color) if not p then return end
  Wait.frames(function()
    if p.clearSelectedObjects then p.clearSelectedObjects() end
    roller.call("askSpawn",{player=p,number=A,auto=1})
  end,5)
end

function rebuildContextWeapons()
  parsedWeaponsCache=parseWeaponsFromDescription()
  for i,w in ipairs(parsedWeaponsCache) do
    local prefix=(w.type=="R") and "[1E87FF]R[-]" or "[F4641D]M[-]"
    local title=string.sub(prefix.." "..w.name,1,24)
    if string.len(prefix.." "..w.name)>24 then title=title.."..." end
    self.addContextMenuItem(title,function(pc) callback_AttackFromDesc(pc,i) end)
  end
end

function callback_AttackFromDesc(pc_color,i)
  local w=parsedWeaponsCache[i] if not w then return end
  local prefix=(w.type=="R") and "[1E87FF]R[-]" or "[F4641D]M[-]"
  local name=prefix.." "..w.name
  local A=w.stats["A"] or 0
  local bs=w.stats["WS/BS"] or 0
  if isInjured()==true and bs>0 then bs=bs+1 end
  print("Attacking with "..name.." "..A.."D6 @ "..bs.."+")
  local roller=nil
  for _,o in ipairs(getAllObjects()) do if o.hasTag("KTUIDiceRoller") then roller=o end end
  local p=getPlayerByColor(pc_color) if not roller or not p then return end
  Wait.frames(function() if p.clearSelectedObjects then p.clearSelectedObjects() end roller.call("askSpawn",{player=p,number=A,auto=1}) end,5)
end

function refreshUI()
  hydrateStats()
  local sc=self.getScale()
  local sX,sY,sZ=1/sc.x,1/sc.y,1/sc.z
  local circOffset=function(d,a) local ra=math.rad(a); return string.format("%d %d",math.cos(ra)*d,math.sin(ra)*d) end

  local off_injured = state.display_arrows and -75 or -35
  local off_order   = state.display_arrows and 95  or  65

  local position="0 0 -" .. tostring((state.uiHeight or 0)*100*sZ)
  if state.isHorizontal==true then position="0 -" .. tostring(60*sY) .. " -" .. tostring(20*sZ) end

  parsedWeaponsCache=parseWeaponsFromDescription()

  local xml=[[
<Defaults><Image class="statusDisplay" hideAnimation="Shrink" showAnimation="Grow" preserveAspect="true"/></Defaults>
<Panel position="]]..position..[[" width="100" height="160" rotation="0 0 ]]..(state.uiAngle or 0)..[[" scale="]]..sX..[[ ]]..sY..[[ ]]..sZ..[[">
  <HorizontalLayout spacing="3" width="@totalSecret" height="20" offsetXY="-30 -10">
    --@EquipmentPlaceholder
    --@SecretsPlaceholder
  </HorizontalLayout>

  <Panel color="#808080" outline="#FF5500" outlineSize="2 2" width="80" height="25" offsetXY="]]..circOffset(40,270)..[[">
    <Image id="ktcnid-status-injured" image="Wound_blue" width="30" height="30" rectAlignment="MiddleLeft" offsetXY="]]..off_injured..[[ 0" active="]]..tostring(isInjured())..[[" />
    <Button text="-" width="30" height="30" offsetXY="-65 0" onClick="damage" active="]]..tostring((state.display_arrows or false))..[[" />
    <Text id="ktcnid-status-wounds" text="]]..string.format("%d/%d",state.wounds or 0,(state.stats and state.stats.W) or 0)..[[" resizeTextForBestFit="true" color="#ffffff" onClick="toggleArrows" />
    <Button text="+" width="30" height="30" offsetXY="65 0" onClick="heal" active="]]..tostring((state.display_arrows or false))..[[" />
    <Image id="ktcnid-status-order" image="]]..getCurrentOrder()..[[" rectAlignment="MiddleRight" width="55" height="55" offsetXY="]]..off_order..[[ 0" active="true" onClick="callback_orders" />
  </Panel>

  <HorizontalLayout spacing="5" width="@totalWeapons" height="24" offsetXY="]]..circOffset(66,270)..[[">--@WeaponsPlaceholder</HorizontalLayout>
  <HorizontalLayout spacing="3" width="@totalAtt" height="30" offsetXY="]]..circOffset(135,270)..[[">--@AttachmentPlaceholder</HorizontalLayout>
</Panel>]]

  weaponBtnMap={}
  local rList,mList={},{}
  for i,w in ipairs(parsedWeaponsCache) do
    if w.type=="R" then table.insert(rList,{i=i}) else table.insert(mList,{i=i}) end
  end

  local function circle(id,hex,label)
    return [[
<Panel id="]]..id..[[" width="22" height="22" onClick="callback_weaponBtn">
  <Panel width="22" height="22" rectAlignment="MiddleCenter" raycastTarget="false">
    <Mask type="circle"/><Panel width="22" height="22" color="#000000" raycastTarget="false"/>
  </Panel>
  <Panel width="20" height="20" rectAlignment="MiddleCenter" raycastTarget="false">
    <Mask type="circle"/><Panel width="20" height="20" color="#]]..hex..[[" raycastTarget="false"/>
  </Panel>
  <Text text="]]..label..[[" rectAlignment="MiddleCenter" color="#ffffff" fontSize="12" raycastTarget="false"/>
</Panel> --@WeaponsPlaceholder]]
  end

  local btn=0
  local function addGroup(list,hex)
    for k,e in ipairs(list) do
      btn=btn+1
      local id="ktcnid-weaponbtn-"..btn
      weaponBtnMap[id]=e.i
      xml=xml:gsub("--@WeaponsPlaceholder",circle(id,hex,tostring(k)))
    end
  end
  addGroup(rList,HEX_R)
  addGroup(mList,HEX_M)

  local totalWeapons=(#rList+#mList)*28

  local sv=secretVisibility()
  local totalAtt,totalStack,totalSecrets=0,0,0
  local secretxml="--@SecretsPlaceholder"

  for _,i in pairs(state.attachments or {}) do
    if i.equipment==true and i.active==true then
      totalSecrets=totalSecrets+1
      local x=[[<Image id="ktcnid-status-]]..i.name..[[" image="]]..i.name..[[" width="30" height="30" preserveAspect="true" active="true" onClick="callback_attachment" /> --@EquipmentPlaceholder]]
      xml=xml:gsub("--@EquipmentPlaceholder",x)
    elseif i.secret==false then
      if i.active then
        totalAtt=totalAtt+1
        local x=[[<Image id="ktcnid-status-]]..i.name..[[" image="]]..i.name..[[" width="30" height="30" preserveAspect="true" ]]
        if i.removable then x=x..[[ onClick="callback_attachment" ]] end
        x=x..[[ active="true" /> --@AttachmentPlaceholder]]
        if i.stackable and (i.stack or 0)>0 then
          totalStack=totalStack+1
          x=[[<Panel width="30" height="30"><Text id="ktcnid-status-stack-]]..i.name..[[" text="]]..i.stack..[[x" width="20" rectAlignment="Middle" color="#ffffff" /></Panel> ]]..x
        end
        xml=xml:gsub("--@AttachmentPlaceholder",x)
      end
    else
      totalSecrets=totalSecrets+1
      local x=[[<Image id="ktcnid-status-]]..i.name..[[" image="]]..i.name..[[" width="30" height="30" preserveAspect="true"]]
      if i.active then x=x..[[ visibility="]]..tostring(sv)..[[" color="#333333DD" ]] end
      x=x..[[ active="true" onClick="callback_secret" /> --@SecretsPlaceholder]]
      if i.active then secretxml=secretxml:gsub("--@SecretsPlaceholder",x) else xml=xml:gsub("--@SecretsPlaceholder",x) end
    end
  end

  xml=xml:gsub("@totalAtt",tostring((totalAtt*30)+(totalStack*25)))
  xml=xml:gsub("@totalSecret",tostring((totalSecrets*30)))
  xml=xml:gsub("@totalWeapons",tostring(totalWeapons))
  xml=xml:gsub("--@SecretsPlaceholder",secretxml)

  self.UI.setXml(xml)
  if (state.wounds or 0)==0 then Wait.frames(function() refreshWounds() end,1) end
end

function createUI()
  local baseBundle={
    {name="Engage_ready",     url=[=[https://steamusercontent-a.akamaihd.net/ugc/1857172427760474363/695DDBC1E5EBD24801831E34F2C640B0B0DACF20/]=]},
    {name="Engage_activated", url=[=[https://steamusercontent-a.akamaihd.net/ugc/1857172427760474790/63E7C5132CFE12964FFAA74EE03535EA6FEE2637/]=]},
    {name="Conceal_ready",    url=[=[https://steamusercontent-a.akamaihd.net/ugc/1857172427760474921/2051CBD8272374F262C88AC0DABF50BEAAB2C3BA/]=]},
    {name="Conceal_activated",url=[=[https://steamusercontent-a.akamaihd.net/ugc/1857172427760474857/9CE3B9494B93973E94B71E062558E88D83BEC6BC/]=]},
    {name="Wound_blue",       url=[=[https://steamusercontent-a.akamaihd.net/ugc/1857171492582455772/CFB7B4D001501AC54B4D0CC7FEE35AF679B73D34/]=]},
    {name="Wound_red",        url=[=[https://steamusercontent-a.akamaihd.net/ugc/1857171826950614938/C515FF37C3D1D269533C1B5FDA675895F792BC15/]=]},
  }
  for _,i in pairs(state.attachments or {}) do table.insert(baseBundle,{name=i.name,url=i.url}) end
  self.UI.setCustomAssets(baseBundle)
end

function isInjured() return (state.stats and state.stats.W) and (state.wounds or 0) < state.stats.W/2 or false end
function toggleArrows() state.display_arrows=not state.display_arrows refreshUI() end

function damage(player,_v,_id) hydrateStats() local si=isInjured() state.wounds=math.max(0,(state.wounds or 0)-1) if not si and isInjured() then self.UI.show("ktcnid-status-injured") end saveState() refreshWounds() notify(player,string.format("%s took damage",self.getName())) end
function heal(player,_v,_id) hydrateStats() local si=isInjured() state.wounds=math.min(((state.stats and state.stats.W) or 0),(state.wounds or 0)+1) if si and not isInjured() then self.UI.hide("ktcnid-status-injured") end saveState() refreshWounds() notify(player,string.format("%s recovered",self.getName())) end
function kill(player,_v,_id) state.wounds=0 saveState() refreshWounds() notify(player,string.format("%s KO",self.getName())) end

function updateStats(pc_color)
  notify(pc_color,"Updating stats from values in description")
  local statsub={}
  local prevW=(state.stats and state.stats.W) or 0
  local wounds=state.wounds or 0
  local desc=self.getDescription() or ""
  state.stats=state.stats or {}

  local function grab(desc,key)
    return desc:match("%[84E680%]"..key.."%[%-%]%s*%[ffffff%]%s*(%d+)")
  end
  local function inner(stat, alt)
    local s = grab(desc,stat) or (alt and grab(desc,alt)) or nil
    if s then
      table.insert(statsub,string.format("%s = %s",stat,s))
      state.stats[stat]=tonumber(s)
      return true
    else
      table.insert(statsub,string.format("%s = [ff0000]X[-]",stat)); return false
    end
  end

  inner("M","MOVE"); inner("APL"); inner("GA"); inner("DF"); inner("SV","SAVE")
  if inner("W","WOUNDS") then
    if wounds==0 or prevW==0 or wounds>(state.stats.W or 0) then
      state.wounds=state.stats.W or wounds
    else
      state.wounds=math.min(wounds,state.stats.W or wounds)
    end
    refreshWounds()
  end
  saveState()
  notify(pc_color,table.concat(statsub,", "))
end

-- ===== ЛОКАЛЬНЫЕ скрипты для LOS-конусов =====
local LOS_CONE_OFF_SCRIPT = [[
function onLoad()
  self.setName("LOS Cone: Offensive")
  self.addTag("KTUI_LOS")
  self.addContextMenuItem("Delete", function() self.destruct() end)
  self.addContextMenuItem("Rotate +15°", function() local r=self.getRotation(); self.setRotationSmooth({r.x,r.y+15,r.z}) end)
  self.addContextMenuItem("Rotate -15°", function() local r=self.getRotation(); self.setRotationSmooth({r.x,r.y-15,r.z}) end)
  self.addContextMenuItem("Length +10%", function() local s=self.getScale(); self.setScale({s.x*1.1,s.y,s.z*1.1}) end)
  self.addContextMenuItem("Length -10%", function() local s=self.getScale(); self.setScale({s.x*0.9,s.y,s.z*0.9}) end)
end
]]

local LOS_CONE_DEF_SCRIPT = [[
function onLoad()
  self.setName("LOS Cone: Defensive")
  self.addTag("KTUI_LOS")
  self.addContextMenuItem("Delete", function() self.destruct() end)
  self.addContextMenuItem("Rotate +15°", function() local r=self.getRotation(); self.setRotationSmooth({r.x,r.y+15,r.z}) end)
  self.addContextMenuItem("Rotate -15°", function() local r=self.getRotation(); self.setRotationSmooth({r.x,r.y-15,r.z}) end)
end
]]

-- универсальный спавн Custom_Model с локальным скриптом
local function spawn_custom_with_script(objData, modelData, script_str, physics)
  local o = spawnObject(objData)
  o.setCustomObject(modelData)
  if physics then for k,v in pairs(physics) do o[k]=v end end
  o.setLuaScript(script_str or "")
  return o
end

-- KTMT: маршрут
function agregaRuta()
  local pos = self.getPosition()
  local rot = self.getRotation()
  local baseX = (state.base and state.base.x) or 25
  local objData = {
    type="Custom_Model",
    scale={1,1,1},
    rotation={rot.x,rot.y,rot.z},
    position={pos.x+1, pos.y+0.2, pos.z}
  }
  local modelData = {
    mesh     = "https://raw.githubusercontent.com/Ixidior/KTMT/main/"..tostring(baseX).."MM.obj",
    diffuse  = "https://i.imgur.com/K1RvGML.jpg",
    collider = "https://raw.githubusercontent.com/Ixidior/KTMT/main/collider4.obj",
    type=0, material=0,
    specular_intensity=0,
    specular_sharpness=7,
    fresnel_strength=0.4
  }
  local phys = {
    angular_drag=0.1, bounciness=0,
    dynamic_friction=0.7, drag=0.1, mass=1, static_friction=1
  }
  local o = spawn_custom_with_script(objData, modelData, "", phys)
  -- по желанию можно загрузить логику узлов через WebRequest, но необязательно
end

-- LOS (Offensive) — фикс: локальный скрипт, нет авто-удаления
function agregaCono()
  local pos = self.getPosition()
  local rot = self.getRotation()
  local objData = {
    type="Custom_Model",
    scale={1,1,1},
    rotation={rot.x,rot.y,rot.z},
    position={pos.x+1.2, pos.y+0.2, pos.z}
  }
  local modelData = {
    mesh     = "https://raw.githubusercontent.com/Ixidior/KTMT/refs/heads/main/CONE.obj",
    diffuse  = "https://i.imgur.com/K1RvGML.jpg",
    collider = "https://raw.githubusercontent.com/Ixidior/KTMT/refs/heads/main/CONE_COLLIDER.obj",
    type=0, material=0,
    specular_intensity=0,
    specular_sharpness=7,
    fresnel_strength=0.4
  }
  local phys = {
    angular_drag=120, bounciness=0,
    dynamic_friction=1, drag=120, mass=10, static_friction=1,
    use_gravity=false
  }
  spawn_custom_with_script(objData, modelData, LOS_CONE_OFF_SCRIPT, phys)
end

-- LOS (Defensive) — тоже локальный
function agregaConoR()
  local pos = self.getPosition()
  local rot = self.getRotation()
  local objData = {
    type="Custom_Model",
    scale={1,1,1},
    rotation={rot.x,rot.y,rot.z},
    position={pos.x+1.2, pos.y+0.2, pos.z}
  }
  local modelData = {
    mesh     = "https://raw.githubusercontent.com/Ixidior/KTMT/refs/heads/main/CONE.obj",
    diffuse  = "https://i.imgur.com/K1RvGML.jpg",
    collider = "https://raw.githubusercontent.com/Ixidior/KTMT/refs/heads/main/CONE.obj",
    type=0, material=0,
    specular_intensity=0,
    specular_sharpness=7,
    fresnel_strength=0.4
  }
  local phys = {
    angular_drag=120, bounciness=0,
    dynamic_friction=1, drag=120, mass=10, static_friction=1,
    use_gravity=true
  }
  spawn_custom_with_script(objData, modelData, LOS_CONE_DEF_SCRIPT, phys)
end
-- ===== конец LOS =====

function onLoad(ls)
  loadState()
  state.display_arrows=state.display_arrows or false
  state.attachments=state.attachments or {}
  state.info=state.info or {weapons={},categories={}}
  state.stats=state.stats or {}
  hydrateStats()

  self.addContextMenuItem("Engage",function(pc) setEngage() end)
  self.addContextMenuItem("Conceal",function(pc) setConceal() end)
  self.addContextMenuItem("Kill",function(pc) kill(pc) end)
  self.addContextMenuItem("Save place",function(pc) savePosition() end)
  self.addContextMenuItem("Load place",function(pc) loadPosition() end)
  self.addContextMenuItem("Update stats",updateStats)
  self.addContextMenuItem("Change UI position",function(pc) state.isHorizontal=not (state.isHorizontal==true) refreshUI() end)

  -- KTMT меню
  self.addContextMenuItem("Movement", function(pc) agregaRuta() end)
  self.addContextMenuItem("LOS (Offensive)", function(pc) agregaCono() end)
  self.addContextMenuItem("LOS (Defensive)", function(pc) agregaConoR() end)

  rebuildContextWeapons()

  local taglist={state.modelid,"Operative"} for _,c in pairs(state.info.categories) do table.insert(taglist,c) end
  self.setTags(taglist) self.addTag("KTUIMini")

  createUI(); refreshUI(); refreshVectors(true)
  Wait.frames(function() refreshWounds() end,1)
end

function callback_Attack(pc_color,i) callback_AttackFromDesc(pc_color,i) end

function setEngage() state.order="Engage" state.ready=true refreshUI() end
function setConceal() state.order="Conceal" state.ready=true refreshUI() end

function getCurrentOrder() local o=state.order or "Engage" if state.ready==nil or state.ready then return o.."_ready" else return o.."_activated" end end
function onPickUp(pc) if rangeShown then refreshVectors(true) end end
function tryRandomize(pc) rangeShown,measureColor,measureRange=not rangeShown,nil,0 refreshVectors() return false end
function getOwningPlayer() return nil end
function setOwningPlayer(_) end
function onPlayerChangeColor(color) end

function refreshVectors(norotate)
  local scaleFactor=1/self.getScale().x
  local rot=self.getRotation()
  local newLines={{points=getCircleVectorPoints(0 - baseLineRadius,baseLineHeight),color={0.5,0.5,0.5},thickness=baseLineRadius*2*scaleFactor}}
  if rangeShown then
    if measureRange>0 then
      table.insert(newLines,{points=getCircleVectorPoints(measureRange - modelMeasureLineRadius + 0.05,0.125),color=measureColor or {1,1,1},thickness=modelMeasureLineRadius*2*scaleFactor,rotation=(norotate and {0,0,0} or {-rot.x,0,-rot.z})})
    else
      for _,r in pairs(ranges) do
        table.insert(newLines,{points=getCircleVectorPoints(r.range - modelMeasureLineRadius + 0.05,0.125),color=r.color,thickness=modelMeasureLineRadius*2*scaleFactor,rotation=(norotate and {0,0,0} or {-rot.x,0,-rot.z})})
      end
    end
  end
  self.setVectorLines(newLines)
end

function getCircleVectorPoints(radius,height,segments)
  local res={}
  local sX=1/self.getScale().x local sY=1/self.getScale().y local sZ=1/self.getScale().z
  local steps=segments or 64
  local deg=360/steps local cos=math.cos local sin=math.sin local rad=math.rad
  local modelBase=state.base or {x=0,z=0}
  local mtoi=0.0393701
  local baseX=(modelBase.x or 0)*0.5*mtoi
  local baseZ=(modelBase.z or 0)*0.5*mtoi
  for i=0,steps do
    table.insert(res,{x=cos(rad(deg*i))*((radius+baseX)*sX),z=sin(rad(deg*i))*((radius+baseZ)*sZ),y=height*sY})
  end
  return res
end

function doAutoSize()
  local nx=(state.base and state.base.x) or 0
  local nz=(state.base and state.base.z) or 0
  local b=self.getBoundsNormalized()
  if b.size.x==0 or b.size.y==0 then local r=self.getRotation() self.setRotation(Vector(0,0,0)) b=self.getBounds() self.setRotation(r) end
  local scale=self.getScale()
  local xi=nx/25.4 local zi=nz/25.4
  local xs=(xi/b.size.x)*scale.x local zs=(zi/b.size.z)*scale.z
  self.setScale(Vector(xs,(xs+zs)/2,zs)) refreshVectors()
end

function setBaseSize(x,z) state.base={x=x,z=z} saveState() refreshVectors() refreshUI() end
function addRole(role,hidden) state.roles=state.roles or {} state.hiddenRoles=state.hiddenRoles or {} local t=hidden and state.hiddenRoles or state.roles table.insert(t,role) self.UI.show(hidden and "ktcnid-status-hiddenRole" or "ktcnid-status-role") saveState() end
function removeRole(role) local function rri(list,id) if not list then return end local nr={} for _,v in ipairs(list) do if v~=role then table.insert(nr,v) end end if id=="ktcnid-status-role" then state.roles=nr else state.hiddenRoles=nr end if #nr==0 then self.UI.hide(id) end end rri(state.roles,"ktcnid-status-role") rri(state.hiddenRoles,"ktcnid-status-hiddenRole") end
function revealRole(role) removeRole(role) addRole(role,false) end

isColliding=false
function onCollisionEnter(a)
  if isColliding==true then return end
  if a.collision_object.getLock()==true then return end
  isColliding=true
  local must=false
  if a.collision_object.hasTag("KTUITokenOrder") then
    local ns=a.collision_object.getDescription() a.collision_object.destruct()
    state.order=ns:startswith("Engage") and "Engage" or "Conceal"
    state.ready=ns:endswith("ready") must=true
  elseif a.collision_object.hasTag("KTUITokenSimple") or a.collision_object.hasTag("KTUITokenEquipment") then
    local ns=a.collision_object.getDescription()
    local co=a.collision_object.getCustomObject()
    local imageUrl=co.image local stackable=co.stackable
    local equipment=a.collision_object.hasTag("KTUITokenEquipment")
    local removable=not equipment if equipment then stackable=false end
    a.collision_object.destruct()
    state.attachments=state.attachments or {}
    local att=state.attachments[ns]
    if not att then
      state.attachments[ns]={name=ns,url=imageUrl,removable=removable,stackable=stackable,secret=false,equipment=equipment,active=true,stack=1}
      saveState() createUI() refreshUI()
    else
      if att.url~=imageUrl then att.url=imageUrl saveState() createUI() refreshUI() end
      if att.active==false then att.active=true att.stack=1 else att.stack=(att.stack or 0)+1 end
    end
    must=true
  elseif a.collision_object.hasTag("KTUITokenAdvanced") then
    local cls=a.collision_object.call('KTUI_GetTokenFace') a.collision_object.destruct()
    local ns, imageUrl = cls.name, cls.url
    local removable, stackable = cls.removable, cls.stackable
    local secret, equipment = cls.secret, cls.equipment
    if secret then removable=false stackable=false equipment=false end
    if equipment then stackable=false end
    state.attachments=state.attachments or {}
    local att=state.attachments[ns]
    if not att then
      state.attachments[ns]={name=ns,url=imageUrl,removable=removable,stackable=stackable,secret=secret,equipment=equipment,active=true,stack=0}
      saveState() createUI() refreshUI() must=true
    else
      if att.url~=imageUrl then att.url=imageUrl saveState() createUI() refreshUI() must=true end
      if att.active==false then att.active=true end
    end
    must=true
  end
  if must then saveState() refreshUI() Wait.frames(function() isColliding=false self.reload() end,30) end
  Wait.frames(function() isColliding=false end,40)
end

function KTUI_ReadyOperative() state.ready=true refreshUI() end
function KTUI_CleanOperative() state.attachments={} refreshUI() end

function comCheckOwner(t) return true end
function comBaseSize() return state.base end
function comSetBase(t) setBaseSize(t.x,t.z) end
function comAutoSize() doAutoSize() refreshUI() end
function comSavePosition(t) savePosition(t.position,t.rotation) end
function comLoadPosition() loadPosition() end
function comAddRole(t) addRole(t.role,t.hidden) end
function comRemoveRole(t) removeRole(t.role) end
function comRevealRole(t) revealRole(t.role) end
function comSetUIAngle(t) state.uiAngle=t.uiAngle saveState() refreshUI() end

string.startswith=function(self,str) return self:find('^'..str)~=nil end
string.endswith=function(self,str) return self:find(str.."$")~=nil end
