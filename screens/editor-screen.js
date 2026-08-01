const {Card,Badge,Button,TextInput,SegmentedControl}=window.ArgminDesignSystem_b29498;
const cellW=96,rowH=48,headH=40;
function HCell({v,onCh,w=cellW}){return <div style={{position:'relative',width:w,height:headH,background:'var(--head)',borderRight:'1px solid var(--line2)',borderBottom:'1px solid var(--line2)',display:'flex',alignItems:'center',boxSizing:'border-box'}}>
  <input value={v} onChange={onCh} style={{width:'100%',textAlign:'center',background:'none',border:'none',outline:'none',fontSize:12,fontWeight:600,padding:0}}/></div>;}
function EditorScreen({onSolve,onHome}){
  const [title,setTitle]=React.useState('Denver network');
  const [mode,setMode]=React.useState('Matrix');
  const ex=KIT.ex;
  const [src,setSrc]=React.useState([...ex.src]);
  const [dst,setDst]=React.useState([...ex.dst]);
  const [costs,setCosts]=React.useState(ex.costs.map(r=>[...r]));
  const [supply,setSupply]=React.useState([...ex.supply]);
  const [demand,setDemand]=React.useState([...ex.demand]);
  const fmt=n=>(+n||0).toLocaleString('en-US');
  const ts=supply.reduce((a,b)=>a+(+b||0),0),td=demand.reduce((a,b)=>a+(+b||0),0),bal=ts===td;
  const upd=(set,arr,i,v,num)=>{const a=[...arr];a[i]=num?(v===''?0:(+v||0)):v;set(a);};
  const updCost=(r,c,v)=>{const a=costs.map(x=>[...x]);a[r][c]=v===''?0:(+v||0);setCosts(a);};
  const numIn={width:'100%',height:'100%',boxSizing:'border-box',textAlign:'right',padding:'0 14px',background:'none',border:'none',outline:'none',fontFamily:'var(--font-mono)',fontSize:14};
  return <div data-screen-label="Input editor — transportation" style={{maxWidth:1020,margin:'0 auto',padding:'28px 24px 72px'}}>
    <div style={{fontSize:12,color:'var(--mut)'}}><a onClick={onHome} style={{cursor:'pointer'}}>Problems</a> / Transportation</div>
    <div style={{display:'flex',alignItems:'center',gap:10,marginTop:4,flexWrap:'wrap'}}>
      <TextInput variant="title" value={title} onChange={e=>setTitle(e.target.value)} style={{minWidth:180,flex:1}}/>
      <Button variant="secondary">Load example</Button>
      <Button variant="secondary">Paste data</Button>
      <SegmentedControl options={['Matrix','Graph']} value={mode} onChange={setMode}/>
      <Button onClick={onSolve}>Solve →</Button>
    </div>
    <div style={{display:'flex',alignItems:'center',gap:10,margin:'12px 0 18px',flexWrap:'wrap'}}>
      <Badge tone={bal?'ok':'warn'}>{bal?`Balanced · ${fmt(ts)} supply = ${fmt(td)} demand`:`Unbalanced by ${fmt(Math.abs(ts-td))} · ${ts>td?'supply exceeds demand':'demand exceeds supply'}`}</Badge>
      {!bal&&<Button variant="secondary" style={{padding:'4px 9px',fontSize:'11.5px',fontWeight:600,color:'var(--accent)',borderColor:'var(--accent)'}}>{ts>td?'+ Add dummy destination':'+ Add dummy source'}</Button>}
      <span style={{fontSize:12,color:'var(--mut)'}}>{src.length} sources × {dst.length} destinations</span>
    </div>
    <Card>
      {mode==='Matrix'?<div>
      <div style={{overflowX:'auto'}}>
        <div style={{display:'inline-block',border:'1px solid var(--line)',borderRadius:10,overflow:'hidden'}}>
          <div style={{display:'flex'}}>
            <div style={{width:140,height:headH,background:'var(--head)',borderRight:'1px solid var(--line2)',borderBottom:'1px solid var(--line2)',display:'flex',alignItems:'center',paddingLeft:12,boxSizing:'border-box',fontFamily:'var(--font-mono)',fontSize:'10.5px',color:'var(--mut)'}}>cost / unit</div>
            {dst.map((d,i)=><HCell key={i} v={d} onCh={e=>upd(setDst,dst,i,e.target.value)}/>)}
            <div style={{width:104,height:headH,background:'var(--head)',borderBottom:'1px solid var(--line2)',display:'flex',alignItems:'center',justifyContent:'flex-end',paddingRight:14,boxSizing:'border-box',fontSize:'11.5px',fontWeight:600}}>Supply</div>
          </div>
          {src.map((s,r)=><div key={r} style={{display:'flex'}}>
            <div style={{width:140,height:rowH,background:'var(--head)',borderRight:'1px solid var(--line2)',borderBottom:'1px solid var(--line2)',display:'flex',alignItems:'center',boxSizing:'border-box'}}>
              <input value={s} onChange={e=>upd(setSrc,src,r,e.target.value)} style={{width:'100%',background:'none',border:'none',outline:'none',fontSize:'12.5px',fontWeight:600,padding:'0 12px'}}/>
            </div>
            {costs[r].map((v,c)=><div key={c} style={{width:cellW,height:rowH,borderRight:'1px solid var(--line2)',borderBottom:'1px solid var(--line2)',boxSizing:'border-box'}}>
              <input value={v} onChange={e=>updCost(r,c,e.target.value)} inputMode="numeric" style={numIn}/></div>)}
            <div style={{width:104,height:rowH,background:'var(--head)',borderBottom:'1px solid var(--line2)',boxSizing:'border-box'}}>
              <input value={supply[r]} onChange={e=>upd(setSupply,supply,r,e.target.value,1)} inputMode="numeric" style={{...numIn,fontWeight:500}}/></div>
          </div>)}
          <div style={{display:'flex'}}>
            <div style={{width:140,height:44,background:'var(--head)',borderRight:'1px solid var(--line2)',display:'flex',alignItems:'center',paddingLeft:12,boxSizing:'border-box',fontSize:'11.5px',fontWeight:600}}>Demand</div>
            {demand.map((v,i)=><div key={i} style={{width:cellW,height:44,background:'var(--head)',borderRight:'1px solid var(--line2)',boxSizing:'border-box'}}>
              <input value={v} onChange={e=>upd(setDemand,demand,i,e.target.value,1)} inputMode="numeric" style={{...numIn,fontWeight:500}}/></div>)}
            <div style={{width:104,height:44,background:'var(--head)',display:'flex',alignItems:'center',justifyContent:'flex-end',paddingRight:14,boxSizing:'border-box',fontFamily:'var(--font-mono)',fontSize:12,color:bal?'var(--ok)':'var(--warn)',fontWeight:600}}>{bal?'✓ '+fmt(ts):fmt(ts)+' / '+fmt(td)}</div>
          </div>
        </div>
      </div>
      <Button variant="dashed" style={{marginTop:8,width:'100%',boxSizing:'border-box'}}>+ Add source</Button>
      <div style={{marginTop:12,fontSize:'11.5px',color:'var(--mut)'}}>Click any cell to edit — Tab moves across. Names are editable too. The matrix and the graph are two views of the same model.</div>
      </div>:
      <div>
        <svg width="640" height={Math.max(66+(src.length-1)*108+66,48+(dst.length-1)*92+66,300)} style={{maxWidth:'100%'}}>
          {costs.map((row,r)=>row.map((cost,c)=>{const y1=66+r*108,y2=48+c*92,t=[0.24,0.42,0.6,0.78][c%4];
            return <g key={r+'_'+c}><line x1={148} y1={y1} x2={490} y2={y2} stroke="var(--line)" strokeWidth="1.2"/>
            <text x={148+342*t} y={y1+(y2-y1)*t-4} style={{font:"500 10px var(--font-mono)",fill:'var(--mut)'}}>{cost}</text></g>;}))}
          {src.map((n,i)=><g key={'s'+i}><circle cx={120} cy={66+i*108} r={28} fill="var(--head)" stroke="var(--line)" strokeWidth="1.2"/><text x={120} y={70+i*108} textAnchor="middle" style={{font:"600 12px var(--font-mono)",fill:'var(--ink)'}}>{fmt(supply[i])}</text><text x={84} y={70+i*108} textAnchor="end" style={{font:"500 12px var(--font-sans)",fill:'var(--mut)'}}>{n}</text></g>)}
          {dst.map((n,i)=><g key={'d'+i}><circle cx={520} cy={48+i*92} r={28} fill="var(--head)" stroke="var(--line)" strokeWidth="1.2"/><text x={520} y={52+i*92} textAnchor="middle" style={{font:"600 12px var(--font-mono)",fill:'var(--ink)'}}>{fmt(demand[i])}</text><text x={556} y={52+i*92} style={{font:"500 12px var(--font-sans)",fill:'var(--mut)'}}>{n}</text></g>)}
        </svg>
        <div style={{marginTop:8,fontSize:'11.5px',color:'var(--mut)'}}>Each edge carries its unit cost. Sources on the left (supply inside the node), destinations on the right (demand). Switch back to Matrix to edit values.</div>
      </div>}
    </Card>
  </div>;
}
Object.assign(window,{EditorScreen});
