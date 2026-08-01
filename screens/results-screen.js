const {Card,Badge,Button,Tabs,StepTimeline,Metric,Overline}=window.ArgminDesignSystem_b29498;
const fmt=n=>(+n||0).toLocaleString('en-US');
function AllocMatrix({alloc,deltas,entering,opt,hover,setHover}){
  const ex=KIT.ex;
  return <div style={{width:504}}>
    <div style={{display:'flex'}}>
      <div style={{width:120,height:36,display:'flex',alignItems:'center',paddingLeft:10,boxSizing:'border-box',fontFamily:'var(--font-mono)',fontSize:'10.5px',color:'var(--mut)'}}>cost / route</div>
      {ex.dst.map((d,i)=><div key={i} style={{width:96,height:36,display:'flex',alignItems:'baseline',justifyContent:'center',gap:5,paddingTop:8,boxSizing:'border-box'}}><span style={{fontSize:12,fontWeight:600}}>{d}</span><span style={{fontFamily:'var(--font-mono)',fontSize:'10.5px',color:'var(--mut)'}}>{ex.demand[i]}</span></div>)}
    </div>
    {ex.src.map((s,r)=><div key={r} style={{display:'flex'}}>
      <div style={{width:120,height:64,display:'flex',flexDirection:'column',justifyContent:'center',paddingLeft:10,boxSizing:'border-box'}}><span style={{fontSize:'12.5px',fontWeight:600}}>{s}</span><span style={{fontFamily:'var(--font-mono)',fontSize:'10.5px',color:'var(--mut)'}}>{fmt(ex.supply[r])}</span></div>
      {ex.dst.map((_,c)=>{const k=r+','+c,a=alloc[k],d=deltas?deltas[k]:undefined,ent=entering===k,hov=hover===k;
        let ring='inset 0 0 0 0.5px var(--line2)';
        if(ent)ring='inset 0 0 0 2px var(--accent)';else if(hov)ring='inset 0 0 0 2px var(--accent)';
        const bg=a!=null?(opt?'color-mix(in oklab, var(--accent) 15%, var(--surface))':'color-mix(in oklab, var(--ink) 8%, var(--surface))'):'var(--surface)';
        return <div key={c} onMouseEnter={setHover?()=>setHover(k):undefined} onMouseLeave={setHover?()=>setHover(null):undefined}
          style={{position:'relative',width:96,height:64,boxSizing:'border-box',display:'flex',alignItems:'center',justifyContent:'center',background:bg,boxShadow:ring,cursor:a&&setHover?'pointer':'default'}}>
          <span style={{position:'absolute',top:5,right:7,fontFamily:'var(--font-mono)',fontSize:'10.5px',color:'var(--mut)'}}>{ex.costs[r][c]}</span>
          {a!=null&&<span style={{fontFamily:'var(--font-mono)',fontSize:17,fontWeight:600,color:opt?'color-mix(in oklab, var(--accent) 80%, var(--ink))':'var(--ink)'}}>{fmt(a)}</span>}
          {a==null&&d!==undefined&&<span style={{position:'absolute',left:8,bottom:6,fontFamily:'var(--font-mono)',fontSize:11,fontWeight:500,color:d<0?'var(--accent)':'var(--mut)'}}>{d>0?'+'+d:'−'+(-d)}</span>}
        </div>;})}
    </div>)}
  </div>;
}
function ResultsScreen({onEdit,onHome}){
  const [tab,setTab]=React.useState(0);
  const [step,setStep]=React.useState(1);
  const [hover,setHover]=React.useState(null);
  const ex=KIT.ex,S=KIT.steps,cs=S[Math.min(step,S.length-1)];
  const aL=[78,168,258],aR=[52,136,220,304];
  return <div data-screen-label="Results — solve output" style={{maxWidth:1180,margin:'0 auto',padding:'28px 24px 72px'}}>
    <div style={{fontSize:12,color:'var(--mut)'}}><a onClick={onHome} style={{cursor:'pointer'}}>Problems</a> / Transportation / <span style={{color:'var(--ink)'}}>Results</span></div>
    <div style={{display:'flex',alignItems:'center',gap:12,marginTop:4,flexWrap:'wrap'}}>
      <h1 style={{margin:0,fontSize:21,fontWeight:600,letterSpacing:'-0.01em'}}>Denver network</h1>
      <Badge tone="ok" solid>✓ EXACT OPTIMUM</Badge>
      <span style={{fontSize:12,color:'var(--mut)'}}>MODI · from North-West Corner · 2 iterations</span>
      <div style={{flex:1}}></div>
      <Button variant="secondary" onClick={onEdit}>Edit data</Button>
      <Button variant="secondary">Save</Button>
    </div>
    <Metric label="min Z =" value="2,850" note="total shipping cost — down from 4,400 at the initial solution" style={{marginTop:14}}/>
    <Tabs items={['Answer','Steps','Insight']} active={tab} onChange={setTab} style={{marginTop:20}}/>
    {tab===1&&<div style={{display:'grid',gridTemplateColumns:'300px 1fr',gap:22,marginTop:20,alignItems:'start'}}>
      <div>
        <StepTimeline steps={S} active={step} onSelect={setStep}/>
        <div style={{display:'flex',alignItems:'center',gap:8,marginTop:12}}>
          <Button variant="secondary" style={{width:30,height:28,padding:0}} onClick={()=>setStep(Math.max(0,step-1))}>‹</Button>
          <Button variant="secondary" style={{width:30,height:28,padding:0}} onClick={()=>setStep(Math.min(S.length-1,step+1))}>›</Button>
          <span style={{fontFamily:'var(--font-mono)',fontSize:'11.5px',color:'var(--mut)'}}>{step+1} / {S.length}</span>
        </div>
      </div>
      <Card padding="20px 22px" style={{minWidth:0}}>
        <div style={{display:'flex',alignItems:'center',gap:9,flexWrap:'wrap'}}>
          <h3 style={{margin:0,fontSize:15,fontWeight:600,flex:1,minWidth:220}}>{cs.label}{cs.sub?' — '+cs.sub:''}</h3>
          {cs.meta.map((m,i)=><span key={i} style={{flex:'none',whiteSpace:'nowrap',fontFamily:'var(--font-mono)',fontSize:11,padding:'3px 8px',border:'1px solid var(--line)',borderRadius:6}}>{m}</span>)}
        </div>
        <p style={{margin:'8px 0 18px',fontSize:13,lineHeight:1.55,color:'var(--mut)',maxWidth:620,textWrap:'pretty'}}>{cs.note}</p>
        <div style={{overflowX:'auto'}}><AllocMatrix alloc={cs.alloc} deltas={cs.deltas} entering={cs.entering} opt={cs.opt}/></div>
        <div style={{display:'flex',gap:18,flexWrap:'wrap',marginTop:16,fontSize:'11.5px',color:'var(--mut)'}}>
          <span style={{display:'inline-flex',alignItems:'center',gap:6}}><span style={{width:12,height:12,borderRadius:3,background:'color-mix(in oklab, var(--ink) 8%, var(--surface))',boxShadow:'inset 0 0 0 1px var(--line)'}}></span>allocated units</span>
          <span style={{display:'inline-flex',alignItems:'center',gap:6}}><span style={{width:12,height:12,borderRadius:3,boxShadow:'inset 0 0 0 2px var(--accent)'}}></span>entering cell</span>
          <span style={{display:'inline-flex',alignItems:'center',gap:6}}><span style={{fontFamily:'var(--font-mono)',fontSize:11}}>Δ</span>cost change per unit if an empty route enters</span>
        </div>
      </Card>
    </div>}
    {tab===0&&<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(480px,1fr))',gap:22,marginTop:20,alignItems:'start'}}>
      <Card padding="20px 22px">
        <Overline>ALLOCATION</Overline>
        <div style={{overflowX:'auto',marginTop:12}}><AllocMatrix alloc={KIT.final} opt hover={hover} setHover={setHover}/></div>
        <div style={{marginTop:14,fontSize:'11.5px',color:'var(--mut)'}}>6 of 12 routes used · every supply and demand met exactly · hover a cell to trace it in the diagram</div>
      </Card>
      <Card padding="20px 22px">
        <Overline>FLOW DIAGRAM</Overline>
        <svg width="470" height="356" style={{maxWidth:'100%',marginTop:6}}>
          {Object.entries(KIT.final).map(([k,u])=>{const [r,c]=k.split(',').map(Number);const on=hover===k;
            return <g key={k}><line x1={124} y1={aL[r]} x2={336} y2={aR[c]} stroke={on?'var(--accent)':'color-mix(in oklab, var(--accent) 55%, var(--mut))'} strokeWidth={1.5+u/55} strokeLinecap="round" opacity={on?1:0.7} style={{cursor:'pointer'}} onMouseEnter={()=>setHover(k)} onMouseLeave={()=>setHover(null)}/>
            <text x={124+(336-124)*0.55} y={aL[r]+(aR[c]-aL[r])*0.55-7} textAnchor="middle" style={{font:(on?'600':'500')+" 11px var(--font-mono)",fill:on?'var(--accent)':'var(--mut)'}}>{fmt(u)}</text></g>;})}
          {KIT.ex.src.map((n,i)=><g key={'s'+i}><circle cx={96} cy={aL[i]} r={26} fill="var(--head)" stroke="var(--line)" strokeWidth="1.2"/><text x={96} y={aL[i]+4} textAnchor="middle" style={{font:"600 11.5px var(--font-mono)",fill:'var(--ink)'}}>{fmt(ex.supply[i])}</text><text x={62} y={aL[i]+4} textAnchor="end" style={{font:"500 11.5px var(--font-sans)",fill:'var(--mut)'}}>{n}</text></g>)}
          {KIT.ex.dst.map((n,i)=><g key={'d'+i}><circle cx={364} cy={aR[i]} r={26} fill="var(--head)" stroke="var(--line)" strokeWidth="1.2"/><text x={364} y={aR[i]+4} textAnchor="middle" style={{font:"600 11.5px var(--font-mono)",fill:'var(--ink)'}}>{fmt(ex.demand[i])}</text><text x={398} y={aR[i]+4} style={{font:"500 11.5px var(--font-sans)",fill:'var(--mut)'}}>{n}</text></g>)}
        </svg>
        <div style={{fontSize:'11.5px',color:'var(--mut)'}}>Edge width ∝ units shipped · hover a route to trace it in the matrix</div>
      </Card>
    </div>}
    {tab===2&&<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(310px,1fr))',gap:22,marginTop:20,alignItems:'start'}}>
      <Card padding="20px 22px">
        <h3 style={{margin:0,fontSize:14,fontWeight:600}}>Shadow prices</h3>
        <p style={{margin:'6px 0 14px',fontSize:'12.5px',lineHeight:1.5,color:'var(--mut)',textWrap:'pretty'}}>What one extra unit of supply or demand would do to total cost, relative to Denver (u = 0).</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
          <div><Overline style={{marginBottom:6}}>WAREHOUSES uᵢ</Overline>
            {[['Denver','0'],['Chicago','4'],['Atlanta','2']].map(([l,v])=><div key={l} style={{display:'flex',justifyContent:'space-between',padding:'5px 0',borderTop:'1px solid var(--line2)',fontSize:'12.5px'}}><span>{l}</span><span style={{fontFamily:'var(--font-mono)'}}>{v}</span></div>)}</div>
          <div><Overline style={{marginBottom:6}}>SHOPS vⱼ</Overline>
            {[['Boston','−2'],['Newark','1'],['Miami','1'],['Austin','0']].map(([l,v])=><div key={l} style={{display:'flex',justifyContent:'space-between',padding:'5px 0',borderTop:'1px solid var(--line2)',fontSize:'12.5px'}}><span>{l}</span><span style={{fontFamily:'var(--font-mono)'}}>{v}</span></div>)}</div>
        </div>
      </Card>
      <Card padding="20px 22px">
        <h3 style={{margin:0,fontSize:14,fontWeight:600}}>Unused routes — reduced costs</h3>
        <p style={{margin:'6px 0 14px',fontSize:'12.5px',lineHeight:1.5,color:'var(--mut)',textWrap:'pretty'}}>How much each unused route's cost must fall before it would enter the plan.</p>
        {[['Chicago → Newark','+1',1],['Denver → Austin','+4'],['Denver → Boston','+5'],['Chicago → Austin','+5'],['Denver → Miami','+6'],['Atlanta → Boston','+8']].map(([l,v,hot])=><React.Fragment key={l}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'6px 0',borderTop:'1px solid var(--line2)',fontSize:'12.5px'}}><span style={{fontWeight:hot?600:400}}>{l}</span><span style={{fontFamily:'var(--font-mono)',fontWeight:hot?600:400}}>{v}</span></div>
          {hot&&<div style={{fontSize:'11.5px',color:'var(--mut)',paddingBottom:6}}>Closest to entering — watch this rate.</div>}
        </React.Fragment>)}
      </Card>
      <Card padding="20px 22px">
        <h3 style={{margin:0,fontSize:14,fontWeight:600}}>How stable is this answer?</h3>
        <p style={{margin:'6px 0 12px',fontSize:'12.5px',lineHeight:1.5,color:'var(--mut)',textWrap:'pretty'}}>Ranges the plan survives — beyond them a different allocation becomes optimal.</p>
        {['Denver → Newark rate can rise from 1 to 5 before the plan changes (Denver → Austin would enter).','Chicago → Boston is safe up to 7 (from 2).','All 7 supply and demand constraints are binding — the problem is balanced, so there is no slack anywhere.','The optimum is unique: no empty route prices at exactly Δ = 0.'].map((t,i)=><div key={i} style={{padding:'8px 0',borderTop:'1px solid var(--line2)',fontSize:'12.5px',lineHeight:1.5}}>{t}</div>)}
      </Card>
    </div>}
  </div>;
}
Object.assign(window,{ResultsScreen});
