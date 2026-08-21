:root{--bg:#15181d;--panel:#1e222a;--panel2:#181b21;--line:#2d333d;--txt:#eaecef;--muted:#96a0ac;--amber:#e8a020;--amber2:#f4b942;--ok:#66c48a;--blue:#5b9bd5;--purp:#9b8cf0;--red:#e05a5a}
*{box-sizing:border-box}
#app{font-family:Arial,Helvetica,sans-serif;color:var(--txt);max-width:1280px;margin:0 auto;padding:6px}
h1{font-size:21px;margin:0 0 2px}
.sub{color:var(--muted);font-size:12px;margin-bottom:16px;line-height:1.5}
label{display:block;font-size:11px;color:var(--muted);margin-bottom:4px;text-transform:uppercase;letter-spacing:.04em}
input,select,textarea{width:100%;background:var(--panel2);border:1px solid var(--line);color:var(--txt);border-radius:8px;padding:8px 10px;font-size:13px;font-family:inherit}
input:focus,select:focus,textarea:focus{outline:none;border-color:var(--amber)}
input[type=number]{text-align:right}
textarea{resize:vertical;min-height:60px;line-height:1.4}
.bar{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px}
.bar .f{flex:1;min-width:150px}
.projbar{display:flex;gap:10px;flex-wrap:wrap;align-items:flex-end;background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:12px;margin-bottom:14px}
.projbar .f{flex:1;min-width:200px}.projbar .btns{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.savedmsg{font-size:12px;align-self:center}
.ai{background:linear-gradient(135deg,#242433,#1c1f28);border:1px solid var(--purp);border-radius:12px;padding:16px;margin-bottom:16px}
.ai h2{margin:0 0 4px;font-size:15px;display:flex;align-items:center;gap:8px}
.ai .ico{width:22px;height:22px;background:var(--purp);border-radius:6px;display:inline-flex;align-items:center;justify-content:center;font-size:13px}
.ai p{color:var(--muted);font-size:12px;margin:2px 0 12px;line-height:1.5}
.drop{border:2px dashed var(--line);border-radius:10px;padding:22px;text-align:center;color:var(--muted);font-size:13px;cursor:pointer;transition:border-color .15s,background .15s}
.drop:hover,.drop.over{border-color:var(--purp);background:rgba(155,140,240,.06)}
.thumbs{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
.thumb{position:relative;width:88px;height:88px;border-radius:8px;overflow:hidden;border:1px solid var(--line)}
.thumb img{width:100%;height:100%;object-fit:cover}
.thumb .x{position:absolute;top:2px;right:2px;background:rgba(0,0,0,.6);color:#fff;border-radius:5px;width:20px;height:20px;border:none;cursor:pointer;font-size:13px}
.airow{display:flex;gap:10px;margin-top:12px;align-items:center;flex-wrap:wrap}
.aitext{flex:1;min-width:200px}
.dak{background:var(--panel);border:1px solid var(--line);border-radius:12px;margin-bottom:14px;overflow:hidden}
.dakhead{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 14px;background:linear-gradient(90deg,#232832,#1e222a);border-bottom:1px solid var(--line)}
.dakhead .nm{font-size:15px;font-weight:bold;border:1px solid transparent;background:transparent;color:var(--txt);padding:4px 8px;border-radius:6px;flex:1;max-width:280px}
.dakhead .nm:hover{border-color:var(--line)}.dakhead .nm:focus{border-color:var(--amber);background:var(--panel2)}
.dakbody{padding:12px 14px}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;margin-bottom:6px}
.sec{font-size:11px;font-weight:bold;color:var(--amber);text-transform:uppercase;letter-spacing:.05em;margin:14px 0 8px;border-bottom:1px solid var(--line);padding-bottom:3px}
.hint{font-size:11px;color:var(--muted);margin-top:2px}
.aiflag{font-size:10px;background:var(--purp);color:#0d1117;padding:2px 6px;border-radius:4px;font-weight:bold;margin-left:8px;text-transform:uppercase}
.chips{display:flex;gap:6px;flex-wrap:wrap}
.chip{font-size:11px;padding:5px 10px;border-radius:20px;border:1px solid var(--line);background:var(--panel2);color:var(--muted);cursor:pointer;user-select:none}
.chip.on{background:var(--amber);color:#15181d;border-color:var(--amber);font-weight:bold}
.scenarios{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-top:8px}
.scard{background:var(--panel2);border:1px solid var(--line);border-radius:10px;padding:14px;position:relative}
.scard.best{border-color:var(--ok)}
.scard h3{margin:0 0 2px;font-size:14px}.scard .iso{font-size:11px;color:var(--muted);margin-bottom:10px}
.scard .prijs{font-size:23px;font-weight:bold;color:#fff;line-height:1.1}
.scard .band{font-size:12px;color:var(--muted);margin-top:3px}
.scard .det{margin-top:10px;font-size:11px;color:var(--muted);border-top:1px solid var(--line);padding-top:8px;line-height:1.7}
.scard .det .r{display:flex;justify-content:space-between}.scard .det .r b{color:var(--txt);font-weight:normal}
.tag{position:absolute;top:10px;right:10px;font-size:9px;background:var(--ok);color:#0d1117;font-weight:bold;padding:2px 7px;border-radius:5px;text-transform:uppercase}
button{background:var(--amber);color:#15181d;border:none;border-radius:8px;padding:9px 15px;font-size:13px;font-weight:bold;cursor:pointer;font-family:inherit}
button:hover{background:var(--amber2)}button:disabled{opacity:.5;cursor:not-allowed}
button.ghost{background:transparent;border:1px solid var(--line);color:var(--txt);font-weight:normal}
button.ghost:hover{border-color:var(--amber);background:var(--panel2)}
button.purp{background:var(--purp);color:#0d1117}button.purp:hover{background:#b0a2ff}
button.sm{padding:6px 10px;font-size:12px}
.del{background:none;color:var(--muted);padding:2px 8px;font-size:16px;border-radius:6px;font-weight:normal}
.del:hover{color:var(--red);background:var(--panel2)}
.daktot{font-size:15px;font-weight:bold;color:var(--amber2)}
.bpk-detail{margin-top:12px;font-size:12px;color:var(--muted);border-top:1px solid var(--line);padding-top:10px}
.bpk-detail .r{display:flex;justify-content:space-between;padding:3px 0}.bpk-detail .r b{color:var(--txt);font-weight:normal}
.totaal{background:linear-gradient(135deg,#232832,#181b21);border:1px solid var(--amber);border-radius:12px;padding:18px;margin-top:8px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px}
.totaal .lbl{font-size:12px;color:var(--muted)}.totaal .groot{font-size:30px;font-weight:bold;color:#fff}
.totaal .band2{font-size:13px;color:var(--amber2)}.tsplit{font-size:12px;color:var(--muted);margin:3px 0}
.tco{background:var(--panel);border:1px solid var(--blue);border-radius:12px;padding:16px;margin-top:16px}
.tco h2{margin:0 0 10px;font-size:15px;color:var(--blue)}
.mlabel{font-size:11px;color:var(--muted);margin:8px 0 4px;font-weight:bold}
.mlabel .u{font-weight:normal;opacity:.7}
label .u{opacity:.6;font-weight:normal}
.grid4{grid-template-columns:repeat(4,1fr)}
@media(max-width:640px){.grid4{grid-template-columns:repeat(2,1fr)}}
.tcotable{width:100%;border-collapse:collapse;font-size:12px;table-layout:fixed}
.tcotable th{text-align:right;color:var(--muted);font-weight:normal;font-size:10px;text-transform:uppercase;padding:8px 10px;border-bottom:1px solid var(--line);vertical-align:bottom}
.tcotable th.l{text-align:left}
.tcotable th.npv{width:34%}
.tcotable td{padding:9px 10px;border-bottom:1px solid #232830;text-align:right;white-space:nowrap}
.tcotable td.l{text-align:left;font-weight:bold;white-space:normal}
.tcotable tr.best td{background:rgba(102,196,138,.10)}
.tcotable .mark{color:var(--ok);font-weight:bold}
.npvwrap{display:flex;flex-direction:column;gap:5px;align-items:flex-end}
.npvval{font-weight:bold;color:#fff;font-size:13px}
.npvbar{display:block;width:100%;height:6px;background:#232830;border-radius:3px;overflow:hidden}
.npvfill{display:block;height:100%;background:var(--blue);border-radius:3px}
.npvfill.bestfill{background:var(--ok)}
.tcosub{font-size:13px;font-weight:bold;color:var(--txt);margin:6px 0 6px}
.tcosub .tcodim{font-weight:normal;color:var(--muted);font-size:11px}
.warn{background:rgba(232,160,32,.1);border:1px solid var(--amber);border-radius:9px;padding:10px 13px;font-size:12px;color:#f0c674;margin-top:12px;line-height:1.5}
.err{background:rgba(224,90,90,.12);border:1px solid var(--red);color:#f0a0a0;border-radius:9px;padding:10px 13px;font-size:12px;margin-top:10px}
.foot{display:flex;gap:10px;flex-wrap:wrap;margin:18px 0 6px}
.add{display:flex;gap:8px;flex-wrap:wrap;margin-top:6px}
.spin{display:inline-block;width:14px;height:14px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:sp .7s linear infinite;vertical-align:middle}
@keyframes sp{to{transform:rotate(360deg)}}
const K={"normen":{"reinigen":{"min":2.0,"mat":0.66,"grp":"mat"},"sloop_dakbedekking":{"min":15.0,"mat":2.92,"grp":"mat"},"sloop_isolatie":{"min":12.1,"mat":1.19,"grp":"mat"},"dampremmer":{"min":5.1,"mat":4.55,"grp":"dakbedekking"},"isolatie_pir_60":{"min":5.0,"mat":11.11,"grp":"isolatie"},"isolatie_pir_90":{"min":8.15,"mat":15.57,"grp":"isolatie"},"isolatie_pir_142":{"min":5.2,"mat":22.1,"grp":"isolatie"},"afschot_isolatie":{"min":6.0,"mat":14.82,"grp":"isolatie"},"werkparkers":{"min":9.0,"mat":1.2,"grp":"mat"},"onderlaag_bitumen":{"min":2.0,"mat":0.0,"grp":"dakbedekking"},"toplaag_bitumen":{"min":7.0,"mat":13.0,"grp":"dakbedekking"},"mech_bev_beton":{"min":12.3,"mat":5.0,"grp":"mat"},"mech_bev_hout":{"min":4.0,"mat":1.2,"grp":"mat"},"mech_bev_staal":{"min":3.5,"mat":1.3,"grp":"mat"},"pvc_toplaag":{"min":4.4,"mat":6.4,"grp":"dakbedekking"},"scheidingslaag":{"min":0.88,"mat":0.79,"grp":"mat"},"pocb_toplaag":{"min":10.6,"mat":12.84,"grp":"dakbedekking"},"epdm_toplaag":{"min":5.0,"mat":14.0,"grp":"dakbedekking"},"grind_ballast":{"min":0.0,"mat":10.35,"grp":"ballast"},"tegels_hermonteren":{"min":27.7,"mat":6.72,"grp":"mat"},"tegels_nieuw":{"min":35.0,"mat":16.6,"grp":"ballast"},"sloop_pannen":{"min":12.0,"mat":4.0,"grp":"mat"},"sloop_panlatten":{"min":8.0,"mat":0.54,"grp":"mat"},"sloop_tengels":{"min":5.0,"mat":0.09,"grp":"mat"},"nieuwe_pannen":{"min":20.0,"mat":34.6,"grp":"dakbedekking"},"pir_hellend":{"min":20.0,"mat":103.5,"grp":"isolatie"},"panlatten_tengels":{"min":8.0,"mat":2.0,"grp":"mat"},"randstrook_1e_80":{"min":13.3,"mat":6.2,"grp":"randafwerking"},"randstrook_2e_80":{"min":13.3,"mat":10.6,"grp":"randafwerking"},"daktrim":{"min":4.5,"mat":3.8,"grp":"randafwerking"},"trimstrook":{"min":3.1,"mat":2.9,"grp":"randafwerking"},"afdekkappen":{"min":11.6,"mat":0.13,"grp":"randafwerking"},"verhogen_dakrand":{"min":12.6,"mat":24.0,"grp":"randafwerking"},"kimfixatie_beton":{"min":15.7,"mat":2.5,"grp":"randafwerking"},"onderstrook_400":{"min":7.2,"mat":12.3,"grp":"randafwerking"},"afwerkstrook_500":{"min":11.2,"mat":13.9,"grp":"randafwerking"},"opgaand_1e_50":{"min":10.3,"mat":5.4,"grp":"randafwerking"},"opgaand_2e_50":{"min":10.3,"mat":6.5,"grp":"randafwerking"},"zinken_deklijst":{"min":10.5,"mat":15.0,"grp":"randafwerking"},"zinken_bakgoot":{"min":30.0,"mat":33.0,"grp":"randafwerking"},"lood_afwerken":{"min":6.0,"mat":0.0,"grp":"mat"},"lood_stereocoat":{"min":20.0,"mat":8.25,"grp":"mat"},"lood_triflex":{"min":20.0,"mat":24.0,"grp":"mat"},"doorvoer_verwijderen":{"min":31.7,"mat":0.0,"grp":"mat"},"doorvoer_alu":{"min":39.8,"mat":30.0,"grp":"mat"},"doorvoer_sparen":{"min":45.1,"mat":7.4,"grp":"mat"},"hwa_verwijderen":{"min":30.1,"mat":0.0,"grp":"mat"},"hwa_lood":{"min":48.0,"mat":30.0,"grp":"mat"},"hwa_alu":{"min":55.0,"mat":13.2,"grp":"mat"},"ontluchting_verw":{"min":31.6,"mat":0.0,"grp":"mat"},"ontluchting_alu":{"min":42.2,"mat":30.0,"grp":"mat"},"grindvanger":{"min":5.2,"mat":5.0,"grp":"mat"},"kedge_anker":{"min":155.0,"mat":195.0,"grp":"mat"},"inwerken_anker":{"min":51.0,"mat":7.0,"grp":"mat"},"velux_verwijderen":{"min":60.0,"mat":25.0,"grp":"mat"},"velux_plaatsen":{"min":210.0,"mat":600.0,"grp":"mat"},"velux_aftimmeren":{"min":240.0,"mat":30.0,"grp":"mat"},"lichtkoepel":{"min":62.7,"mat":1200.0,"grp":"mat"}},"marges":{"arbeid":1.4,"dakbedekking":1.7,"isolatie":1.65,"randafwerking":1.6,"ballast":1.4,"onderaanneming":1.3,"mat":1.5,"overig":1.4},"uurtarief":60,"daktypes":{"bitumen_gebrand":{"naam":"Bitumen 2-laags gebrand (Wedeflex/Derbigum)","dakvlak":["onderlaag_bitumen","toplaag_bitumen"]},"bitumen_mech":{"naam":"Bitumen mechanisch bevestigd","dakvlak":["mech_bev_beton","toplaag_bitumen"]},"pvc_mech":{"naam":"PVC mechanisch bevestigd (Alkorplan)","dakvlak":["scheidingslaag","pvc_toplaag","mech_bev_staal"]},"epdm":{"naam":"EPDM","dakvlak":["epdm_toplaag"]},"pocb":{"naam":"POCB mechanisch (Icopal)","dakvlak":["pocb_toplaag","mech_bev_hout"]},"pannen":{"naam":"Pannendak (hellend, keramisch)","dakvlak":["sloop_pannen","sloop_panlatten","panlatten_tengels","nieuwe_pannen"]}},"isolatie":{"geen":{"naam":"Geen isolatie","werk":[]},"pir_60":{"naam":"PIR 60mm","werk":["isolatie_pir_60","werkparkers"]},"pir_90":{"naam":"PIR 90mm","werk":["isolatie_pir_90","werkparkers"]},"pir_142":{"naam":"PIR 142mm","werk":["isolatie_pir_142","werkparkers"]},"pir_afschot":{"naam":"PIR 142mm + afschot","werk":["isolatie_pir_142","afschot_isolatie","werkparkers"]}},"bouwplaats":{"toegang":{"geen":{"naam":"Geen / eigen materieel","vast":0,"perweek":0},"ladderlift":{"naam":"Ladderlift","vast":600,"perweek":580},"mobielekraan":{"naam":"Mobiele kraan","vast":1700,"perweek":3400},"torenkraan":{"naam":"Torenkraan (hoogbouw)","vast":27000,"perweek":1350}},"randbeveiliging":{"aanvoer_m1":5.4,"huur_m1_week":1.0},"schaft_week":135,"schaft_aanvoer":165,"container_stuk":800,"parkeren":{"geen":{"naam":"Geen","dag":0},"buiten":{"naam":"Buitengebied","dag":45},"stad":{"naam":"Stad / betaald","dag":70},"amsterdam":{"naam":"Amsterdam centrum","dag":110}},"vergunning":{"geen":0,"kraan":500,"meerdere":1056},"risico":{"laag":{"naam":"Laag — standaard werk","pct":0},"normaal":{"naam":"Normaal","pct":3},"verhoogd":{"naam":"Verhoogd — bewoond/binnenstad","pct":7},"hoog":{"naam":"Hoog — complex/veel onzekerheid","pct":12}}},"tco":{"daktypes":{"bitumen_gebrand":{"levensduur":30,"onderhoud_pct":0.8,"grootonderhoud_jaar":15,"grootonderhoud_pct":15,"restwaarde":0},"bitumen_mech":{"levensduur":25,"onderhoud_pct":0.9,"grootonderhoud_jaar":12,"grootonderhoud_pct":15,"restwaarde":0},"pvc_mech":{"levensduur":25,"onderhoud_pct":0.6,"grootonderhoud_jaar":15,"grootonderhoud_pct":10,"restwaarde":0},"epdm":{"levensduur":40,"onderhoud_pct":0.5,"grootonderhoud_jaar":20,"grootonderhoud_pct":8,"restwaarde":0},"pocb":{"levensduur":30,"onderhoud_pct":0.7,"grootonderhoud_jaar":15,"grootonderhoud_pct":12,"restwaarde":0},"pannen":{"levensduur":50,"onderhoud_pct":0.4,"grootonderhoud_jaar":25,"grootonderhoud_pct":10,"restwaarde":0}},"isolatie_R":{"geen":0.5,"pir_60":2.7,"pir_90":4.1,"pir_142":6.3,"pir_afschot":6.3},"defaults":{"horizon":30,"rente":2.0,"inflatie":2.5},"methodes":{"overlagen":{"naam":"Overlagen","levensduur_factor":0.6,"onderhoud_extra_pct":0.4,"grootonderhoud_factor":0.8},"bijisoleren":{"naam":"Bij-isoleren","levensduur_factor":0.9,"onderhoud_extra_pct":0.1,"grootonderhoud_factor":1.0},"slopen":{"naam":"Slopen & opbouwen","levensduur_factor":1.0,"onderhoud_extra_pct":0.0,"grootonderhoud_factor":1.0}}},"methodes":{"overlagen":{"naam":"Overlagen","omschrijving":"Bestaande bedekking blijft; nieuwe laag eroverheen. Alleen reinigen/activeren.","voorwerk":["reinigen"],"isolatie":null},"bijisoleren":{"naam":"Bij-isoleren","omschrijving":"Bestaande bedekking blijft; isolatie + nieuwe bedekking eroverheen.","voorwerk":["reinigen"],"isolatie":"pir_90"},"slopen":{"naam":"Slopen & opbouwen","omschrijving":"Bestaande bedekking en isolatie eraf en afvoeren; compleet nieuw opbouwen.","voorwerk":["sloop_dakbedekking","sloop_isolatie"],"isolatie":"pir_142"}},"producten":{"wedeflex_d4":{"naam":"Wédéflex D4","min":6,"ink":11.21,"levensduur":42,"garantie":10,"dealer":true,"daktype":"bitumen_gebrand"},"derbigum_nt":{"naam":"Derbigum NT","min":8,"ink":11.5,"levensduur":38,"garantie":10,"dealer":true,"daktype":"bitumen_gebrand"},"soprema_470k":{"naam":"Soprema 470K14/24","min":8,"ink":7.05,"levensduur":20,"garantie":10,"dealer":false,"daktype":"bitumen_gebrand"}},"product_default":"wedeflex_d4"};

const fmt=n=>'€ '+Math.round(n||0).toLocaleString('nl-NL');
const N=K.normen,M=K.marges,U=K.uurtarief,DT=K.daktypes,ISO=K.isolatie,BP=K.bouwplaats,TCO=K.tco,MET=K.methodes,PROD=K.producten;
let uid=1;const nid=()=>'d'+(uid++);
const BAND=0.12;
let images=[]; // {name, dataUrl, media_type, base64}
let aiBusy=false, aiError='';

function leegProject(){return{nr:'',adres:'',datum:new Date().toLocaleDateString('nl-NL'),calctoeslag:5,
  toegang:'mobielekraan',weken:2,schaftweken:0,containers:0,parkeren:'geen',parkeerdagen:0,vergunning:'geen',risico:'normaal',
  horizon:30,rente:2.0,daken:[nieuwDak('A')]};}
function nieuwDak(l,ai){return{id:nid(),naam:'Dakvlak '+l,m2:0,rand_m1:0,opgaand_m1:0,lood_m1:0,hwa:0,doorvoer:0,ontluchting:0,kedge:0,
  daktype:'bitumen_gebrand',product:'wedeflex_d4',methode:'bijisoleren',isolatie:'pir_90',ballast:'geen',bereik:'normaal',ai:!!ai};}
let project=leegProject();

const BEREIK={normaal:1.0,hoogbouw:1.12,slecht:1.20};
const BEREIK_LBL={normaal:'Normaal (laag)',hoogbouw:'Hoogbouw + kraan',slecht:'Slechte bereikbaarheid'};
const BALLAST={geen:null,grind:'grind_ballast',tegels:'tegels_nieuw',herleggen:'tegels_hermonteren'};
const BALLAST_LBL={geen:'Geen',grind:'Grind blazen',tegels:'Nieuwe tegels',herleggen:'Tegels herleggen'};

function post(w,h,bf){const n=N[w];if(!n||!h)return{uur:0,vk:0};const uur=n.min*h/60*bf;return{uur,vk:uur*U*M.arbeid+n.mat*h*(M[n.grp]||1.4)};}
function postProd(prodKey,h,bf){const p=PROD[prodKey];if(!p||!h)return{uur:0,vk:0};const uur=p.min*h/60*bf;return{uur,vk:uur*U*M.arbeid+p.ink*h*(M.dakbedekking||1.7)};}
function isBitumenGebrand(dk){return (DT[dk].dakvlak||[]).indexOf('toplaag_bitumen')>=0 && dk==='bitumen_gebrand';}
function gekozenProduct(d){return d.product&&PROD[d.product]?d.product:'wedeflex_d4';}
function methodeIso(d,mk){const m=MET[mk];if(!m||!m.isolatie)return 'geen';return d.isolatie&&ISO[d.isolatie]&&d.isolatie!=='geen'?d.isolatie:m.isolatie;}
function berekenDak(d,dk,mk){const bf=BEREIK[d.bereik]||1;let uur=0,vk=0;const add=r=>{uur+=r.uur;vk+=r.vk;};
  const m=MET[mk]||MET.overlagen;
  (m.voorwerk||[]).forEach(w=>add(post(w,d.m2,bf)));
  const ik=methodeIso(d,mk);
  (DT[dk].dakvlak_kaal||DT[dk].dakvlak||[]).forEach(w=>{if(w==='toplaag_bitumen'&&dk==='bitumen_gebrand'){add(postProd(gekozenProduct(d),d.m2,bf));}else{add(post(w,d.m2,bf));}});(ISO[ik].werk||[]).forEach(w=>add(post(w,d.m2,bf)));
  if(BALLAST[d.ballast])add(post(BALLAST[d.ballast],d.m2,bf));
  add(post("onderstrook_400",d.rand_m1,bf));add(post("afwerkstrook_500",d.rand_m1,bf));add(post("daktrim",d.rand_m1,bf));
  add(post("opgaand_1e_50",d.opgaand_m1,bf));add(post("opgaand_2e_50",d.opgaand_m1,bf));
  add(post("lood_afwerken",d.lood_m1,bf));add(post("lood_stereocoat",d.lood_m1,bf));
  add(post("hwa_verwijderen",d.hwa,bf));add(post("hwa_lood",d.hwa,bf));add(post("grindvanger",d.hwa,bf));
  add(post("doorvoer_verwijderen",d.doorvoer,bf));add(post("doorvoer_alu",d.doorvoer,bf));
  add(post("ontluchting_verw",d.ontluchting,bf));add(post("ontluchting_alu",d.ontluchting,bf));
  add(post("kedge_anker",d.kedge,bf));
  return{uur,vk:vk*(1+(parseFloat(project.calctoeslag)||0)/100),dagen:uur/8};}
function scenarios(d){return Object.keys(MET).map(mk=>({mk,mNaam:MET[mk].naam,...berekenDak(d,d.daktype,mk)}));}
function gekozenMethode(d){return d.methode&&MET[d.methode]?d.methode:'bijisoleren';}
function gekozenIso(d){return methodeIso(d,gekozenMethode(d));}
function bouwplaatskosten(){const wk=parseFloat(project.weken)||0;const t=BP.toegang[project.toegang]||{vast:0,perweek:0};
  const toegang=t.vast+t.perweek*wk;let randm1=0;project.daken.forEach(d=>randm1+=parseFloat(d.rand_m1)||0);
  const rb=randm1*(BP.randbeveiliging.aanvoer_m1+BP.randbeveiliging.huur_m1_week*wk);
  const sw=parseFloat(project.schaftweken)||0;const schaft=sw*BP.schaft_week+(sw>0?BP.schaft_aanvoer:0);
  const containers=(parseFloat(project.containers)||0)*BP.container_stuk;
  const park=(BP.parkeren[project.parkeren]?.dag||0)*(parseFloat(project.parkeerdagen)||0);
  const verg=BP.vergunning[project.vergunning]||0;
  return{toegang,rb,schaft,containers,park,verg,totaal:toegang+rb+schaft+containers+park+verg,randm1};}
function projTotaal(){let werk=0,uur=0;project.daken.forEach(d=>{const s=berekenDak(d,d.daktype,gekozenMethode(d));werk+=s.vk;uur+=s.uur;});
  const bpk=bouwplaatskosten().totaal;const rp=(BP.risico[project.risico]?.pct||0)/100;const risico=(werk+bpk)*rp;
  return{werk,bpk,risico,uur,totaal:werk+bpk+risico};}

// ---- TCO per daktype over horizon (NPV) ----
function tcoCalc(inv, levensduur, onderhoudPct, grootJaar, grootPct){
  const H=parseFloat(project.horizon)||30;const r=(parseFloat(project.rente)||2)/100;
  const jaarOnderhoud=inv*(onderhoudPct/100);
  let npv=inv,nominaal=inv,vervangingen=0;const at=(b,j)=>b/Math.pow(1+r,j);
  for(let j=1;j<=H;j++){
    npv+=at(jaarOnderhoud,j);nominaal+=jaarOnderhoud;
    if(grootJaar>0 && j%Math.round(grootJaar)===0 && j<H){const go=inv*(grootPct/100);npv+=at(go,j);nominaal+=go;}
    if(levensduur>0 && j%Math.round(levensduur)===0 && j<H){npv+=at(inv,j);nominaal+=inv;vervangingen++;}
  }
  return{npv,nominaal,levensduur:Math.round(levensduur),jaarOnderhoud,vervangingen,perJaar:npv/H};
}
function dominantProduct(){const m={};project.daken.forEach(d=>{if(d.daktype==='bitumen_gebrand'){const p=gekozenProduct(d);m[p]=(m[p]||0)+(parseFloat(d.m2)||0);}});let best=null,bv=-1;Object.entries(m).forEach(([k,v])=>{if(v>bv){bv=v;best=k;}});return best;}
function levensduurVoorDaktype(dk){if(dk==='bitumen_gebrand'){const p=dominantProduct();if(p)return PROD[p].levensduur;}return TCO.daktypes[dk].levensduur;}
function tcoVoorDaktype(dk,inv){const t=TCO.daktypes[dk];return tcoCalc(inv,levensduurVoorDaktype(dk),t.onderhoud_pct,t.grootonderhoud_jaar,t.grootonderhoud_pct);}
// dominant daktype van het project (meeste m2), voor de methode-TCO
function dominantDaktype(){const m={};project.daken.forEach(d=>{m[d.daktype]=(m[d.daktype]||0)+(parseFloat(d.m2)||0);});let best='bitumen_gebrand',bv=-1;Object.entries(m).forEach(([k,v])=>{if(v>bv){bv=v;best=k;}});return best;}
function tcoVoorMethode(mk,inv){const dk=dominantDaktype();const t=TCO.daktypes[dk];const mm=TCO.methodes[mk];
  const ld=levensduurVoorDaktype(dk)*mm.levensduur_factor;const oh=t.onderhoud_pct+mm.onderhoud_extra_pct;
  const gj=t.grootonderhoud_jaar*mm.grootonderhoud_factor;
  return tcoCalc(inv,ld,oh,gj,t.grootonderhoud_pct);}

// ---- Claude API vision ----
async function analyseFotos(){
  if(!images.length){aiError='Voeg eerst een foto of plattegrond toe.';render();return;}
  aiBusy=true;aiError='';render();
  const notitie=document.getElementById('ai_notitie')?.value||'';
  try{
    const payload={images:images.map(im=>({media_type:im.media_type,base64:im.base64})),notitie:notitie};
    const resp=await fetch("/api/analyse",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
    const parsed=await resp.json();
    if(parsed.error){aiError=parsed.error;aiBusy=false;render();return;}
    if(parsed.daken&&parsed.daken.length){
      project.daken=parsed.daken.map((x,i)=>Object.assign(nieuwDak(String.fromCharCode(65+i),true),{
        naam:x.naam||('Dakvlak '+String.fromCharCode(65+i)),
        m2:+x.m2||0,rand_m1:+x.rand_m1||0,opgaand_m1:+x.opgaand_m1||0,lood_m1:+x.lood_m1||0,
        hwa:+x.hwa||0,doorvoer:+x.doorvoer||0,ontluchting:+x.ontluchting||0,kedge:+x.kedge||0,
        daktype:DT[x.daktype]?x.daktype:'bitumen_gebrand',product:PROD[x.product]?x.product:'wedeflex_d4',methode:MET[x.methode]?x.methode:(x.isolatie&&x.isolatie!=='geen'?'bijisoleren':'overlagen'),isolatie:ISO[x.isolatie]&&x.isolatie!=='geen'?x.isolatie:'pir_90',
        bereik:BEREIK[x.bereik]?x.bereik:'normaal',toelichting:x.toelichting||'',onzeker:!!x.onzeker
      }));
      if(parsed.algemeen)project.aiAlgemeen=parsed.algemeen;
    } else aiError='Geen dakvlakken herkend. Probeer een duidelijker beeld of vul handmatig in.';
  }catch(e){aiError='Analyse mislukt: '+e.message+'. Controleer of de API bereikbaar is (werkt in de Claude-omgeving / na deploy met API-sleutel).';}
  aiBusy=false;render();
}

function handleFiles(files){
  [...files].forEach(f=>{
    if(!f.type.startsWith('image/')&&f.type!=='application/pdf'){return;}
    const r=new FileReader();
    r.onload=()=>{const b64=r.result.split(',')[1];images.push({name:f.name,dataUrl:r.result,media_type:f.type,base64:b64});render();};
    r.readAsDataURL(f);
  });
}

function render(){
  const bpk=bouwplaatskosten();
  let h=`<h1>AI-raming dakwerk — Zaanstad Dakwerken</h1>
  <div class="sub">Upload een foto of Cyclomedia-plattegrond; de AI stelt dakvlakken, maten en daktype voor. Jij controleert en past aan. Scenario's + TCO over ${project.horizon} jaar. Blijft een <b>raming</b> — geen exacte calculatie.</div>

  <div class="ai">
    <h2><span class="ico">◆</span> AI beeld-analyse</h2>
    <p>Foto's of plattegronden met de werkzaamheden. De AI leest ze mee en vult een concept-raming in. Maten uit beeld zijn schattingen — corrigeer met echte Cyclomedia-maten waar je die hebt.</p>
    <div class="drop" id="drop">📷 Sleep hier foto's/plattegronden of klik om te kiezen<br><span style="font-size:11px">(meerdere tegelijk kan)</span>
      <input type="file" id="file" accept="image/*,application/pdf" multiple style="display:none"></div>
    ${images.length?`<div class="thumbs">${images.map((im,i)=>`<div class="thumb"><img src="${im.dataUrl}"><button class="x" data-delimg="${i}">×</button></div>`).join('')}</div>`:''}
    <div class="airow">
      <div class="aitext"><label>Notitie werkzaamheden (optioneel)</label><textarea id="ai_notitie" placeholder="bijv. plat dak bij-isoleren, bestaande bedekking eraf, nieuwe dakrand...">${project.aiNotitie||''}</textarea></div>
    </div>
    <div class="airow">
      <button class="purp" id="analyse" ${aiBusy?'disabled':''}>${aiBusy?'<span class=spin></span> Bezig met analyseren...':'◆ Analyseer & vul raming in'}</button>
      ${project.aiAlgemeen?`<span class="hint" style="flex:1">AI: ${project.aiAlgemeen}</span>`:''}
    </div>
    ${aiError?`<div class="err">${aiError}</div>`:''}
  </div>

  <div class="bar">
    <div class="f"><label>Projectdossier / OPZD</label><input id="p_nr" value="${project.nr}" placeholder="PRZD..."></div>
    <div class="f" style="flex:2"><label>Betreft / werkadres</label><input id="p_adres" value="${project.adres}" placeholder="straat, plaats"></div>
    <div class="f"><label>Datum</label><input id="p_datum" value="${project.datum}"></div>
    <div class="f"><label>Calc.toeslag %</label><input id="p_ct" type="number" value="${project.calctoeslag}"></div>
  </div>
  <div class="projbar">
    <div class="f"><label>Opgeslagen ramingen</label><select id="sel"><option value="">— kies raming —</option>${savedOpts()}</select></div>
    <div class="btns">
      <button class="sm" id="save">💾 Opslaan</button><button class="ghost sm" id="open">Openen</button>
      <button class="ghost sm" id="del">Verwijderen</button><button class="ghost sm" id="new">Nieuw</button>
      <button class="ghost sm" id="expjson">⬇ Backup</button><button class="ghost sm" id="impbtn">⬆ Importeren</button>
      <input type="file" id="impfile" accept=".json" style="display:none"><span class="savedmsg" id="msg"></span>
    </div>
  </div>`;

  project.daken.forEach((d,i)=>{
    const scen=scenarios(d);const best=scen.reduce((a,b)=>b.vk<a.vk?b:a,scen[0]);
    h+=`<div class="dak"><div class="dakhead">
      <input class="nm" data-nm="${i}" value="${(d.naam||'').replace(/"/g,'&quot;')}">
      ${d.ai?'<span class="aiflag">AI</span>':''}
      <div style="flex:1"></div><button class="del" data-deldak="${i}">×</button></div><div class="dakbody">
    ${d.toelichting?`<div class="hint" style="margin-bottom:8px">◆ ${d.toelichting}${d.onzeker?' <b style="color:var(--amber)">— maten onzeker, controleer</b>':''}</div>`:''}
    <div class="sec">Kernmaten${d.ai?'<span class="aiflag">AI-voorstel</span>':''}</div>
    <div class="mlabel">Afmetingen</div>
    <div class="grid grid4">
      <div><label>Dakoppervlak <span class="u">m²</span></label><input type="number" data-f="${i}.m2" value="${d.m2}"></div>
      <div><label>Dakrand <span class="u">m¹</span></label><input type="number" data-f="${i}.rand_m1" value="${d.rand_m1}"></div>
      <div><label>Opgaand werk <span class="u">m¹</span></label><input type="number" data-f="${i}.opgaand_m1" value="${d.opgaand_m1}"></div>
      <div><label>Loodwerk <span class="u">m¹</span></label><input type="number" data-f="${i}.lood_m1" value="${d.lood_m1}"></div>
    </div>
    <div class="mlabel">Aantallen <span class="u">(stuks)</span></div>
    <div class="grid grid4">
      <div><label>HWA's</label><input type="number" data-f="${i}.hwa" value="${d.hwa}"></div>
      <div><label>Dakdoorvoeren</label><input type="number" data-f="${i}.doorvoer" value="${d.doorvoer}"></div>
      <div><label>Ontluchtingen</label><input type="number" data-f="${i}.ontluchting" value="${d.ontluchting}"></div>
      <div><label>Kedge-ankers</label><input type="number" data-f="${i}.kedge" value="${d.kedge}"></div>
    </div>
    <div class="sec">Dakbedekking</div>
    <div class="chips">${Object.entries(DT).map(([k,v])=>`<span class="chip ${d.daktype===k?'on':''}" data-set="daktype.${i}.${k}">${v.naam}</span>`).join('')}</div>
    ${d.daktype==='bitumen_gebrand'?`<div style="margin-top:8px"><label>Toplaag / product</label><div class="chips">${Object.entries(PROD).map(([k,v])=>`<span class="chip ${gekozenProduct(d)===k?'on':''}" data-setp="${i}.${k}" title="${v.min} min/m² · inkoop €${v.ink} · ${v.levensduur} jr${v.dealer?' · dealergarantie':''}">${v.naam}${v.dealer?' ◆':''}</span>`).join('')}</div><div class="hint">${PROD[gekozenProduct(d)].levensduur} jaar levensduur · ${PROD[gekozenProduct(d)].min} min/m² · inkoop € ${PROD[gekozenProduct(d)].ink}/m²${PROD[gekozenProduct(d)].dealer?' · ◆ dealergarantie '+PROD[gekozenProduct(d)].garantie+' jr':''}</div></div>`:''}
    <div class="sec">Werkmethode</div>
    <div class="chips">${Object.entries(MET).map(([k,v])=>`<span class="chip ${gekozenMethode(d)===k?'on':''}" data-setm="${i}.${k}" title="${v.omschrijving}">${v.naam}</span>`).join('')}</div>
    <div class="hint">${MET[gekozenMethode(d)].omschrijving}</div>
    ${MET[gekozenMethode(d)].isolatie?`<div style="margin-top:8px"><label>Isolatiedikte</label><div class="chips">${Object.entries(ISO).filter(([k])=>k!=='geen').map(([k,v])=>`<span class="chip ${gekozenIso(d)===k?'on':''}" data-set="isolatie.${i}.${k}">${v.naam}</span>`).join('')}</div></div>`:''}
    <div class="sec">Ballast & bereikbaarheid</div>
    <div class="grid">
      <div><label>Ballast</label><select data-sel="${i}.ballast">${Object.entries(BALLAST_LBL).map(([k,v])=>`<option value="${k}"${d.ballast===k?' selected':''}>${v}</option>`).join('')}</select></div>
      <div><label>Bereikbaarheid</label><select data-sel="${i}.bereik">${Object.entries(BEREIK_LBL).map(([k,v])=>`<option value="${k}"${d.bereik===k?' selected':''}>${v}</option>`).join('')}</select></div>
    </div>
    <div class="sec">Scenario's — werkmethode vergeleken (excl. BTW, excl. bouwplaats)</div>
    <div class="scenarios">${scen.map((s,si)=>`<div class="scard ${s===best?'best':''}">
      ${s===best?'<span class="tag">Laagste</span>':''}<h3>${s.mNaam}</h3><div class="iso">${DT[d.daktype].naam.split(' (')[0]}${MET[s.mk].isolatie?' · '+ISO[methodeIso(d,s.mk)].naam:''}</div>
      <div class="prijs" id="sp_${i}_${si}">${fmt(s.vk)}</div><div class="band" id="sb_${i}_${si}">${fmt(s.vk*(1-BAND))} – ${fmt(s.vk*(1+BAND))}</div>
      <div class="det"><div class="r"><span>Arbeid</span><b id="su_${i}_${si}">${Math.round(s.uur)} uur</b></div><div class="r"><span>Mandagen</span><b id="sd_${i}_${si}">${s.dagen.toFixed(1)}</b></div></div>
    </div>`).join('')}</div>
    </div></div>`;
  });
  h+=`<div class="add"><button id="adddak">+ Dakvlak toevoegen</button></div>`;

  h+=`<div class="dak"><div class="dakhead"><span class="nm" style="max-width:none">Bouwplaatskosten & risico</span><span class="daktot">${fmt(bpk.totaal)}</span></div><div class="dakbody">
    <div class="grid">
      <div><label>Toegang / transport</label><select id="bp_toegang">${Object.entries(BP.toegang).map(([k,v])=>`<option value="${k}"${project.toegang===k?' selected':''}>${v.naam}</option>`).join('')}</select></div>
      <div><label>Projectduur (weken)</label><input type="number" id="bp_weken" value="${project.weken}"></div>
      <div><label>Schaftwagen (weken)</label><input type="number" id="bp_schaft" value="${project.schaftweken}"></div>
      <div><label>Containers (st)</label><input type="number" id="bp_cont" value="${project.containers}"></div>
      <div><label>Parkeren</label><select id="bp_park">${Object.entries(BP.parkeren).map(([k,v])=>`<option value="${k}"${project.parkeren===k?' selected':''}>${v.naam}</option>`).join('')}</select></div>
      <div><label>Parkeerdagen</label><input type="number" id="bp_pdagen" value="${project.parkeerdagen}"></div>
      <div><label>Vergunning</label><select id="bp_verg"><option value="geen"${project.vergunning==='geen'?' selected':''}>Geen</option><option value="kraan"${project.vergunning==='kraan'?' selected':''}>Kraan (~500)</option><option value="meerdere"${project.vergunning==='meerdere'?' selected':''}>Meerdere (~1.000)</option></select></div>
      <div><label>Risico-opslag</label><select id="bp_risico">${Object.entries(BP.risico).map(([k,v])=>`<option value="${k}"${project.risico===k?' selected':''}>${v.naam} (${v.pct}%)</option>`).join('')}</select></div>
    </div>
    <div class="bpk-detail">
      <div class="r"><span>Toegang/transport (${BP.toegang[project.toegang].naam}, ${project.weken} wk)</span><b>${fmt(bpk.toegang)}</b></div>
      <div class="r"><span>Randbeveiliging ARBO (${Math.round(bpk.randm1)} m¹)</span><b>${fmt(bpk.rb)}</b></div>
      <div class="r"><span>Schaft</span><b>${fmt(bpk.schaft)}</b></div><div class="r"><span>Containers</span><b>${fmt(bpk.containers)}</b></div>
      <div class="r"><span>Parkeren</span><b>${fmt(bpk.park)}</b></div><div class="r"><span>Vergunning</span><b>${fmt(bpk.verg)}</b></div>
    </div></div></div>`;

  const T=projTotaal();
  h+=`<div class="totaal"><div>
      <div class="lbl">Projecttotaal — raming excl. BTW (dakwerk mét isolatie + bouwplaats + risico)</div>
      <div class="tsplit">Dakwerk ${fmt(T.werk)} · Bouwplaats ${fmt(T.bpk)} · Risico ${fmt(T.risico)}</div>
      <div class="band2">bandbreedte ${fmt(T.totaal*(1-BAND))} – ${fmt(T.totaal*(1+BAND))} · ${Math.round(T.uur)} uur / ${Math.round(T.uur/8)} mandagen</div>
    </div><div style="text-align:right"><div class="lbl">Geraamde verkoopprijs</div><div class="groot">${fmt(T.totaal)}</div></div></div>`;

  // TCO
  h+=tcoBlok(T);
  h+=`<div class="warn">⚠ Indicatieve raming én TCO op gemiddelde kengetallen en branchenormen voor levensduur/onderhoud. Voor een offerte of investeringsbesluit altijd een volledige calculatie en onderbouwing. Onderaanneming en stelposten niet inbegrepen.</div>
  <div class="foot"><button id="exp">⬇ Exporteren (Excel)</button><button class="ghost" id="reset">Leegmaken</button></div>`;
  document.getElementById('app').innerHTML=h;bind();
}

function tcoTabel(titel, rows, kolTitel){
  const maxNpv=Math.max(...rows.map(r=>r.npv));const best=rows.reduce((a,b)=>b.npv<a.npv?b:a,rows[0]);const H=parseFloat(project.horizon)||30;
  return `<div class="tcosub">${titel}</div>
    <table class="tcotable"><thead><tr><th class="l">${kolTitel}</th><th>Levens&shy;duur</th><th>Investering</th><th>Onderhoud/jr</th><th>Verv.</th><th class="npv">TCO over ${H} jr (NPV)</th><th>Per jaar</th></tr></thead><tbody>
    ${rows.map(r=>`<tr class="${r===best?'best':''}">
      <td class="l">${r===best?'<span class=\'mark\'>✓</span> ':''}${r.naam}</td>
      <td>${r.levensduur} jr</td><td>${fmt(r.inv)}</td><td>${fmt(r.jaarOnderhoud)}</td><td>${r.vervangingen}×</td>
      <td class="npv"><div class="npvwrap"><span class="npvval">${fmt(r.npv)}</span><span class="npvbar"><span class="npvfill${r===best?' bestfill':''}" style="width:${Math.round(r.npv/maxNpv*100)}%"></span></span></div></td>
      <td>${fmt(r.perJaar)}</td></tr>`).join('')}
    </tbody></table>`;
}
function tcoBlok(T){
  const H=parseFloat(project.horizon)||30;const bpk=bouwplaatskosten().totaal;
  // Tabel 1: werkmethodes (met dominant daktype als basis)
  const methodeRows=Object.keys(MET).map(mk=>{
    let inv=0;project.daken.forEach(d=>{inv+=berekenDak(d,d.daktype,mk).vk;});inv+=bpk;
    const t=tcoVoorMethode(mk,inv);
    return{mk,naam:MET[mk].naam,inv,...t};
  });
  // Tabel 2: dakbedekkingstypes (met per dak gekozen methode)
  const typeRows=Object.keys(DT).map(dk=>{
    let inv=0;project.daken.forEach(d=>{inv+=berekenDak(d,dk,gekozenMethode(d)).vk;});inv+=bpk;
    const t=tcoVoorDaktype(dk,inv);
    return{dk,naam:DT[dk].naam.split(' (')[0],inv,...t};
  });
  const domNaam=DT[dominantDaktype()].naam.split(' (')[0];
  return `<div class="tco"><h2>TCO-vergelijking over ${H} jaar (contant, rente ${project.rente}%)</h2>
    <div class="grid" style="margin-bottom:14px">
      <div><label>Horizon (jaar)</label><input type="number" id="t_hor" value="${project.horizon}"></div>
      <div><label>Rente / discontovoet %</label><input type="number" step="0.1" id="t_rente" value="${project.rente}"></div>
    </div>
    ${tcoTabel('1 · Werkmethode vergeleken <span class="tcodim">(basis: '+domNaam+')</span>',methodeRows,'Werkmethode')}
    <div class="hint" style="margin:8px 0 18px">Overlagen is goedkoper vooraf, maar gaat korter mee (bouwt op de oude ondergrond) en vraagt meer onderhoud → over de looptijd vaak niet het voordeligst. Slopen &amp; opbouwen kost het meest vooraf maar geeft de volle levensduur.</div>
    ${tcoTabel('2 · Dakbedekkingstype vergeleken <span class="tcodim">(per dak gekozen methode)</span>',typeRows,'Daktype')}
    <div class="hint" style="margin-top:10px">TCO = investering + contant gemaakte onderhouds-, groot-onderhouds- en vervangingskosten over ${H} jaar. De rij met ✓ heeft de laagste TCO. EPDM en pannen kosten meer vooraf maar gaan langer mee en hoeven binnen de looptijd niet vervangen te worden.</div>
  </div>`;
}

function bind(){
  const $=id=>document.getElementById(id);const q=s=>document.querySelectorAll(s);
  const drop=$('drop');
  if(drop){drop.onclick=()=>$('file').click();
    $('file').onchange=e=>handleFiles(e.target.files);
    drop.ondragover=e=>{e.preventDefault();drop.classList.add('over');};
    drop.ondragleave=()=>drop.classList.remove('over');
    drop.ondrop=e=>{e.preventDefault();drop.classList.remove('over');handleFiles(e.dataTransfer.files);};}
  q('[data-delimg]').forEach(e=>e.onclick=ev=>{images.splice(+ev.target.dataset.delimg,1);render();});
  if($('analyse'))$('analyse').onclick=analyseFotos;
  if($('ai_notitie'))$('ai_notitie').oninput=e=>project.aiNotitie=e.target.value;
  $('p_nr').oninput=e=>project.nr=e.target.value;$('p_adres').oninput=e=>project.adres=e.target.value;
  $('p_datum').oninput=e=>project.datum=e.target.value;$('p_ct').oninput=e=>{project.calctoeslag=e.target.value;upd();};
  q('[data-nm]').forEach(e=>e.oninput=ev=>project.daken[+ev.target.dataset.nm].naam=ev.target.value);
  q('[data-f]').forEach(e=>e.oninput=ev=>{const[i,f]=ev.target.dataset.f.split('.');project.daken[+i][f]=parseFloat(ev.target.value)||0;upd();});
  q('[data-sel]').forEach(e=>e.onchange=ev=>{const[i,f]=ev.target.dataset.sel.split('.');project.daken[+i][f]=ev.target.value;render();});
  q('[data-set]').forEach(e=>e.onclick=ev=>{const[kind,i,val]=ev.target.dataset.set.split('.');project.daken[+i][kind]=val;render();});
  q('[data-setm]').forEach(e=>e.onclick=ev=>{const[i,val]=ev.target.dataset.setm.split('.');project.daken[+i].methode=val;render();});
  q('[data-setp]').forEach(e=>e.onclick=ev=>{const[i,val]=ev.target.dataset.setp.split('.');project.daken[+i].product=val;render();});
  q('[data-deldak]').forEach(e=>e.onclick=ev=>{if(confirm('Dakvlak verwijderen?')){project.daken.splice(+ev.target.dataset.deldak,1);render();}});
  $('adddak').onclick=()=>{project.daken.push(nieuwDak(String.fromCharCode(65+project.daken.length)));render();};
  $('bp_toegang').onchange=e=>{project.toegang=e.target.value;render();};$('bp_weken').oninput=e=>{project.weken=e.target.value;upd();};
  $('bp_schaft').oninput=e=>{project.schaftweken=e.target.value;upd();};$('bp_cont').oninput=e=>{project.containers=e.target.value;upd();};
  $('bp_park').onchange=e=>{project.parkeren=e.target.value;render();};$('bp_pdagen').oninput=e=>{project.parkeerdagen=e.target.value;upd();};
  $('bp_verg').onchange=e=>{project.vergunning=e.target.value;render();};$('bp_risico').onchange=e=>{project.risico=e.target.value;render();};
  if($('t_hor'))$('t_hor').oninput=e=>{project.horizon=e.target.value;render();};
  if($('t_rente'))$('t_rente').oninput=e=>{project.rente=e.target.value;render();};
  $('save').onclick=saveProject;$('open').onclick=()=>openProject($('sel').value);$('del').onclick=()=>deleteProject($('sel').value);
  $('new').onclick=newProject;$('expjson').onclick=exportBackup;$('impbtn').onclick=()=>$('impfile').click();
  $('impfile').onchange=ev=>{if(ev.target.files[0])importBackup(ev.target.files[0]);ev.target.value='';};
  $('sel').onchange=ev=>{if(ev.target.value)openProject(ev.target.value);};$('exp').onclick=exportXls;
  $('reset').onclick=()=>{if(confirm('Alles leegmaken?')){project=leegProject();images=[];render();}};
}
function upd(){
  const setId=(id,t)=>{const e=document.getElementById(id);if(e)e.textContent=t;};
  const setS=(s,t)=>{const e=document.querySelector(s);if(e)e.textContent=t;};
  project.daken.forEach((d,i)=>scenarios(d).forEach((s,si)=>{setId(`sp_${i}_${si}`,fmt(s.vk));setId(`sb_${i}_${si}`,`${fmt(s.vk*(1-BAND))} – ${fmt(s.vk*(1+BAND))}`);setId(`su_${i}_${si}`,`${Math.round(s.uur)} uur`);setId(`sd_${i}_${si}`,s.dagen.toFixed(1));}));
  const bpk=bouwplaatskosten();const T=projTotaal();const dets=document.querySelectorAll('.bpk-detail .r b');
  if(dets.length>=6){dets[0].textContent=fmt(bpk.toegang);dets[1].textContent=fmt(bpk.rb);dets[2].textContent=fmt(bpk.schaft);dets[3].textContent=fmt(bpk.containers);dets[4].textContent=fmt(bpk.park);dets[5].textContent=fmt(bpk.verg);}
  const dt=document.querySelectorAll('.daktot');if(dt.length)dt[dt.length-1].textContent=fmt(bpk.totaal);
  setS('.totaal .groot',fmt(T.totaal));setS('.totaal .tsplit',`Dakwerk ${fmt(T.werk)} · Bouwplaats ${fmt(T.bpk)} · Risico ${fmt(T.risico)}`);
  setS('.totaal .band2',`bandbreedte ${fmt(T.totaal*(1-BAND))} – ${fmt(T.totaal*(1+BAND))} · ${Math.round(T.uur)} uur / ${Math.round(T.uur/8)} mandagen`);
}

// opslaan/laden
const PFX='airaming:',IDX='airaming_index';let savedIndex=[];const mem={};
const hasS=(typeof window!=='undefined'&&window.storage&&window.storage.get);
async function sGet(k){if(hasS){try{const r=await window.storage.get(k);return r?r.value:null;}catch(e){return null;}}return k in mem?mem[k]:null;}
async function sSet(k,v){if(hasS){try{await window.storage.set(k,v);return true;}catch(e){return false;}}mem[k]=v;return true;}
async function sDel(k){if(hasS){try{await window.storage.delete(k);}catch(e){}}delete mem[k];}
async function loadIndex(){const r=await sGet(IDX);savedIndex=r?JSON.parse(r):[];}
async function saveIdx(){await sSet(IDX,JSON.stringify(savedIndex));}
function savedOpts(){return savedIndex.slice().sort((a,b)=>(b.op||'').localeCompare(a.op||'')).map(x=>`<option value="${x.key}">${(x.naam||x.key).replace(/</g,'&lt;')} · ${x.op||''}</option>`).join('');}
function pLabel(){return(project.nr||'').trim()||(project.adres||'').trim()||'Naamloze raming';}
function msg(t,ok=true){const e=document.getElementById('msg');if(e){e.textContent=t;e.style.color=ok?'var(--ok)':'var(--red)';setTimeout(()=>{if(e.textContent===t)e.textContent='';},4000);}}
async function saveProject(){const naam=pLabel();let en=savedIndex.find(x=>x.naam===naam);const key=en?en.key:PFX+Date.now();const now=new Date().toLocaleString('nl-NL',{dateStyle:'short',timeStyle:'short'});const snap=Object.assign({},project);delete snap.aiAlgemeen;if(!await sSet(key,JSON.stringify(snap))){msg('Opslaan mislukt',false);return;}if(en)en.op=now;else savedIndex.push({key,naam,op:now});await saveIdx();render();msg('Opgeslagen ✓');}
async function openProject(key){if(!key)return;const r=await sGet(key);if(!r){msg('Niet gevonden',false);return;}try{project=Object.assign(leegProject(),JSON.parse(r));if(!project.daken||!project.daken.length)project.daken=[nieuwDak('A')];render();msg('Geopend ✓');}catch(e){msg('Onleesbaar',false);}}
async function deleteProject(key){if(!key)return;const en=savedIndex.find(x=>x.key===key);if(!confirm('Verwijderen: '+(en?en.naam:key)+'?'))return;await sDel(key);savedIndex=savedIndex.filter(x=>x.key!==key);await saveIdx();render();msg('Verwijderd ✓');}
function newProject(){if(!confirm('Nieuwe lege raming?'))return;project=leegProject();images=[];render();}
function dl(n,c,t){const b=new Blob([c],{type:t});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=n;a.click();}
function exportBackup(){const s=Object.assign({},project);delete s.aiAlgemeen;dl(pLabel().replace(/[^\w\-]+/g,'_')+'.json',JSON.stringify(s,null,2),'application/json');msg('Backup ✓');}
function importBackup(f){const r=new FileReader();r.onload=()=>{try{project=Object.assign(leegProject(),JSON.parse(r.result));if(!project.daken||!project.daken.length)project.daken=[nieuwDak('A')];render();msg('Geïmporteerd ✓');}catch(e){msg('Ongeldig',false);}};r.readAsText(f);}

function exportXls(){
  const T=projTotaal();const bpk=bouwplaatskosten();const H=parseFloat(project.horizon)||30;
  let rows=[];const tr=(...c)=>rows.push('<tr>'+c.map((x,j)=>`<td${j>0?' style="text-align:right"':''}>${x}</td>`).join('')+'</tr>');
  tr('<b>AI-raming dakwerk</b>');tr('Dossier',project.nr);tr('Betreft',project.adres);tr('Datum',project.datum);tr('');
  project.daken.forEach(d=>{tr('<b>'+d.naam+'</b>',DT[d.daktype].naam+(d.daktype==='bitumen_gebrand'?' — '+PROD[gekozenProduct(d)].naam+' ('+PROD[gekozenProduct(d)].levensduur+'jr)':''));tr('m²',d.m2,'rand m¹',d.rand_m1);scenarios(d).forEach(s=>tr('  '+s.mNaam,fmt(s.vk),Math.round(s.uur)+' uur'));tr('');});
  tr('<b>Bouwplaats</b>',fmt(bpk.totaal));tr('Dakwerk',fmt(T.werk));tr('Risico',fmt(T.risico));tr('<b>TOTAAL excl BTW</b>',fmt(T.totaal));tr('');
  tr(`<b>TCO over ${H} jaar (NPV, rente ${project.rente}%)</b>`);
  tr('<b>1 · Werkmethode</b>','investering','TCO','levensduur');
  Object.keys(MET).forEach(mk=>{let inv=0;project.daken.forEach(d=>inv+=berekenDak(d,d.daktype,mk).vk);inv+=bpk.totaal;const t=tcoVoorMethode(mk,inv);tr(MET[mk].naam,fmt(inv),fmt(t.npv),t.levensduur+' jr');});
  tr('');tr('<b>2 · Dakbedekkingstype</b>','investering','TCO','levensduur');
  Object.keys(DT).forEach(dk=>{let inv=0;project.daken.forEach(d=>inv+=berekenDak(d,dk,gekozenMethode(d)).vk);inv+=bpk.totaal;const t=tcoVoorDaktype(dk,inv);tr(DT[dk].naam.split(' (')[0],fmt(inv),fmt(t.npv),t.levensduur+' jr');});
  dl((project.nr||'airaming')+'.xls',`<html xmlns:x="urn:schemas-microsoft-com:office:excel"><head><meta charset="utf-8"></head><body><table border="1">${rows.join('')}</table></body></html>`,'application/vnd.ms-excel');
}

async function init(){await loadIndex();render();}
init();
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>AI-raming dakwerk — Zaanstad Dakwerken</title>
  <link rel="stylesheet" href="/styles.css">
  <style>body{background:#15181d;margin:0;padding:16px}</style>
</head>
<body>
  <div id="app"></div>
  <script src="/app.js"></script>
</body>
</html>
