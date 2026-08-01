const {Badge,GlyphTile}=window.ArgminDesignSystem_b29498;
const savedCols='1.5fr 1.1fr 0.7fr 0.8fr 1.5fr 0.7fr';
function SavedRow({r,first,onOpen}){
  const [hov,setHov]=React.useState(false);
  return <div onClick={onOpen} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
    style={{display:'grid',gridTemplateColumns:savedCols,gap:12,padding:'13px 18px',alignItems:'center',cursor:'pointer',fontSize:'12.5px',borderTop:first?'none':'1px solid var(--line2)',background:hov?'var(--head)':'transparent'}}>
    <span style={{fontWeight:600,display:'flex',alignItems:'center',gap:9,minWidth:0}}>
      <GlyphTile size="sm" ic={r.ic}><Glyph name={r.g} w={24} h={18}/></GlyphTile>
      <span style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{r.name}</span>
    </span>
    <span style={{color:'var(--mut)'}}>{r.model}</span>
    <span style={{fontFamily:'var(--font-mono)',color:'var(--mut)'}}>{r.size}</span>
    <span style={{fontFamily:'var(--font-mono)',fontWeight:600,textAlign:'right'}}>{r.obj}</span>
    <span style={{minWidth:0}}><Badge tone={r.tone} small style={{maxWidth:'100%',overflow:'hidden',textOverflow:'ellipsis',boxSizing:'border-box'}}>{r.badge}</Badge></span>
    <span style={{color:'var(--mut)',textAlign:'right'}}>{r.upd}</span>
  </div>;
}
function SavedScreen({onOpen}){
  return <div data-screen-label="Saved problems" style={{maxWidth:960,margin:'0 auto',padding:'44px 24px 72px'}}>
    <h1 style={{margin:0,fontSize:27,fontWeight:600,letterSpacing:'-0.015em'}}>Saved problems</h1>
    <p style={{margin:'8px 0 22px',fontSize:14,color:'var(--mut)'}}>Your past models — click one to reopen its solution.</p>
    <div style={{background:'var(--surface)',border:'1px solid var(--line)',borderRadius:12,overflow:'hidden'}}>
      <div style={{display:'grid',gridTemplateColumns:savedCols,gap:12,padding:'10px 18px',background:'var(--head)',borderBottom:'1px solid var(--line)',fontFamily:'var(--font-mono)',fontSize:'10.5px',letterSpacing:'0.06em',color:'var(--mut)'}}>
        <span>NAME</span><span>MODEL</span><span>SIZE</span><span style={{textAlign:'right'}}>OBJECTIVE</span><span>METHOD</span><span style={{textAlign:'right'}}>UPDATED</span>
      </div>
      {KIT.saved.map((r,i)=><SavedRow key={r.name} r={r} first={i===0} onOpen={i===0?onOpen:undefined}/>)}
    </div>
  </div>;
}
Object.assign(window,{SavedScreen});
