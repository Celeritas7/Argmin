const {Card,Tag,GlyphTile,Chip,Button}=window.ArgminDesignSystem_b29498;
function ModelRow({m,ic,first,onOpen}){
  const [hov,setHov]=React.useState(false);
  return <div onClick={()=>onOpen(m.id)} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
    style={{display:'flex',alignItems:'center',gap:14,padding:'11px 8px',margin:'0 -8px',borderRadius:9,cursor:'pointer',background:hov?'var(--head)':'transparent',borderTop:first?'none':'1px solid var(--line2)'}}>
    <GlyphTile ic={ic} style={{transform:hov?'scale(1.03)':'none',transition:'transform .22s ease'}}><Glyph name={m.g}/></GlyphTile>
    <div style={{flex:1,minWidth:0}}>
      <div style={{display:'flex',alignItems:'center',gap:8}}>
        <span style={{fontSize:'13.5px',fontWeight:500}}>{m.name}</span>
        {m.tag&&<Tag tone={m.tagTone||'warn'}>{m.tag}</Tag>}
      </div>
      <div style={{fontSize:12,lineHeight:1.35,color:'var(--mut)'}}>{m.desc}</div>
    </div>
    <span style={{color:'var(--mut)'}}>›</span>
  </div>;
}
function HomeScreen({onOpen}){
  const [wizOpen,setWizOpen]=React.useState(false);
  const [wiz,setWiz]=React.useState(null);
  const recs={ship:{t:'Transportation problem',w:'You have sources with supply, destinations with demand, and a cost for each pair. If goods pass through depots on the way, pick transshipment instead.',id:'transportation'},pick:{t:'Knapsack (0/1)',w:'You are selecting items under a budget or capacity limit. If you must cover every requirement with the fewest choices, look at set covering.',id:'knapsack'},route:{t:'Vehicle routing',w:'Several vehicles with capacity limits, each covering part of the stops. A single vehicle visiting every stop once is a travelling salesman problem.',id:'vrp'},pair:{t:'Assignment problem',w:'One-to-one pairing at least total cost. If both sides rank each other instead of having costs, use stable matching.',id:'assignment'}};
  const chips=[['ship','I\u2019m moving or shipping things'],['pick','I\u2019m choosing items under a limit'],['route','I\u2019m planning visits or routes'],['pair','I\u2019m pairing people or tasks']];
  return <div data-screen-label="Home — problem picker" style={{maxWidth:1080,margin:'0 auto',padding:'44px 24px 72px'}}>
    <div style={{display:'flex',alignItems:'center',gap:32,flexWrap:'wrap'}}>
      <div style={{flex:1,minWidth:300}}>
        <h1 style={{margin:0,fontSize:27,fontWeight:600,letterSpacing:'-0.015em'}}>What are you optimising?</h1>
        <p style={{margin:'8px 0 0',fontSize:14,lineHeight:1.5,color:'var(--mut)',maxWidth:580,textWrap:'pretty'}}>Pick a model below. Argmin solves it and shows every step of the working — not just the answer.</p>
      </div>
      <img src="../../assets/hero-network.svg" width="300" height="128" alt="" style={{flex:'none'}}/>
    </div>
    <div style={{margin:'24px 0 28px',border:'1px dashed var(--line)',borderRadius:12,background:'var(--surface)',padding:'14px 18px'}}>
      <div style={{display:'flex',alignItems:'center',gap:12,flexWrap:'wrap'}}>
        <span style={{fontSize:13,fontWeight:600}}>Not sure which one?</span>
        <span style={{fontSize:'12.5px',color:'var(--mut)'}}>Answer one question and we'll point you at the right model.</span>
        <div style={{flex:1}}></div>
        <Button variant="secondary" onClick={()=>setWizOpen(!wizOpen)}>{wizOpen?'Hide':'Help me choose'}</Button>
      </div>
      {wizOpen&&<div>
        <div style={{marginTop:14,fontSize:12,fontWeight:600,color:'var(--mut)'}}>What are you trying to decide?</div>
        <div style={{marginTop:8,display:'flex',gap:8,flexWrap:'wrap'}}>
          {chips.map(([k,l])=><Chip key={k} selected={wiz===k} onClick={()=>setWiz(k)}>{l}</Chip>)}
        </div>
        {wiz&&<div style={{marginTop:14,display:'flex',alignItems:'flex-start',gap:14,padding:'14px 16px',border:'1px solid var(--line)',borderRadius:10,background:'var(--head)',flexWrap:'wrap'}}>
          <div style={{flex:1,minWidth:260}}>
            <div style={{fontSize:'13.5px',fontWeight:600}}>{recs[wiz].t}</div>
            <div style={{marginTop:3,fontSize:'12.5px',lineHeight:1.5,color:'var(--mut)',textWrap:'pretty'}}>{recs[wiz].w}</div>
          </div>
          <Button onClick={()=>onOpen(recs[wiz].id)}>Open the editor →</Button>
        </div>}
      </div>}
    </div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(420px,1fr))',gap:20}}>
      {KIT.categories.map(cat=><Card key={cat.name} shadow radius="var(--r-card-lg)" ic={cat.ic} padding="20px 20px 10px">
        <div style={{display:'flex',alignItems:'baseline',gap:10}}>
          <span style={{width:8,height:8,borderRadius:2,background:`var(--${cat.ic})`,alignSelf:'center'}}></span>
          <h2 style={{margin:0,fontSize:16,fontWeight:600}}>{cat.name}</h2>
          <span style={{flex:'none',whiteSpace:'nowrap',fontFamily:'var(--font-mono)',fontSize:11,color:`var(--${cat.ic})`,background:`color-mix(in oklab, var(--${cat.ic}) 10%, var(--surface))`,padding:'2px 7px',borderRadius:5}}>{cat.count} models</span>
        </div>
        <p style={{margin:'4px 0 8px',fontSize:'12.5px',color:'var(--mut)'}}>{cat.desc}</p>
        <div style={{display:'flex',flexDirection:'column'}}>
          {cat.models.map((m,i)=><ModelRow key={m.id} m={m} ic={cat.ic} first={i===0} onOpen={onOpen}/>)}
        </div>
      </Card>)}
    </div>
  </div>;
}
Object.assign(window,{HomeScreen});
