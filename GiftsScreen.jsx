const {Card,Badge,Button,TextInput,SegmentedControl,Overline}=window.ArgminDesignSystem_b29498;
const gfCol=i=>`var(--cat-${(i%6)+1})`;
function GiftsScreen({onHome}){
  const [title,setTitle]=React.useState('My gift list');
  const [view,setView]=React.useState('Matrix');
  const [friends,setFriends]=React.useState(['Mara','Noah','Priya']);
  const [gifts,setGifts]=React.useState([{n:'Wool scarf',q:1},{n:'Coffee sampler',q:1},{n:'Board game',q:2},{n:'Scented candle',q:1},{n:'Photo book',q:3},{n:'Chocolate box',q:1}]);
  const [given,setGiven]=React.useState([{g:0,to:1},{g:2,to:0},{g:2,to:2},{g:4,to:0}]);
  const history=[{n:'Scented candle',to:1,when:'Birthday ’25'},{n:'Photo book',to:2,when:'Holidays ’25'},{n:'Chocolate box',to:0,when:'Holidays ’25'}];
  const [drag,setDrag]=React.useState(null),[over,setOver]=React.useState(null),[newG,setNewG]=React.useState('');
  const qOf=i=>Math.max(1,+gifts[i].q||1);
  const usedOf=i=>given.filter(x=>x.g===i).length;
  const leftOf=i=>qOf(i)-usedOf(i);
  const total=gifts.reduce((a,x)=>a+Math.max(1,+x.q||1),0),done=given.length,leftN=total-done;
  const assign=(gi,fi)=>{if(leftOf(gi)>0)setGiven([...given,{g:gi,to:fi}]);};
  const unassign=(gi,fi)=>{const vi=given.findIndex(x=>x.g===gi&&x.to===fi);if(vi>=0)setGiven(given.filter((_,i)=>i!==vi));};
  const cellBtn={width:'100%',height:'100%',border:'none',background:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',padding:0};
  const headH=40,rowH=44,colW=104;
  return <div data-screen-label="Gift assignment board" style={{maxWidth:1020,margin:'0 auto',padding:'28px 24px 72px'}}>
    <div style={{fontSize:12,color:'var(--mut)'}}><a onClick={onHome} style={{cursor:'pointer'}}>Problems</a> / Gift assignment</div>
    <div style={{display:'flex',alignItems:'center',gap:10,marginTop:4,flexWrap:'wrap'}}>
      <TextInput variant="title" value={title} onChange={e=>setTitle(e.target.value)} style={{minWidth:180,flex:1}}/>
      <SegmentedControl options={['Board','Matrix']} value={view} onChange={setView}/>
      <Button variant="secondary" onClick={()=>{const counts=friends.map((_,fi)=>given.filter(g=>g.to===fi).length);const add=[];gifts.forEach((g,gi)=>{let left=Math.max(1,+g.q||1)-given.filter(y=>y.g===gi).length;while(left-->0){let m=0;counts.forEach((c,i)=>{if(c<counts[m])m=i;});add.push({g:gi,to:m});counts[m]++;}});setGiven([...given,...add]);}}>Spread evenly</Button>
    </div>
    <div style={{display:'flex',alignItems:'center',gap:10,margin:'12px 0 18px',flexWrap:'wrap'}}>
      <Badge tone={leftN===0?'ok':'warn'}>{leftN===0?`All ${total} gifts assigned`:`${done} of ${total} gifts assigned`}</Badge>
      <span style={{fontSize:12,color:'var(--mut)'}}>{gifts.length} gifts × {friends.length} friends</span>
    </div>
    {view==='Matrix'?<Card>
      <div style={{overflowX:'auto'}}>
        <div style={{display:'inline-block',border:'1px solid var(--line)',borderRadius:10,overflow:'hidden'}}>
          <div style={{display:'flex'}}>
            <div style={{width:190,height:headH,background:'var(--head)',borderRight:'1px solid var(--line2)',borderBottom:'1px solid var(--line2)',display:'flex',alignItems:'center',paddingLeft:12,boxSizing:'border-box',fontFamily:'var(--font-mono)',fontSize:'10.5px',color:'var(--mut)'}}>gift / friend</div>
            {friends.map((f,fi)=><div key={fi} style={{width:colW,height:headH,background:'var(--head)',borderRight:'1px solid var(--line2)',borderBottom:'1px solid var(--line2)',display:'flex',alignItems:'center',justifyContent:'center',boxSizing:'border-box',fontSize:12,fontWeight:600}}>{f}</div>)}
            <div style={{width:96,height:headH,background:'var(--head)',borderBottom:'1px solid var(--line2)',display:'flex',alignItems:'center',justifyContent:'flex-end',paddingRight:14,boxSizing:'border-box',fontSize:'11.5px',fontWeight:600}}>In pile</div>
          </div>
          {gifts.map((g,gi)=>{const left=leftOf(g?gi:gi);
            return <div key={gi} style={{display:'flex'}}>
            <div style={{width:190,height:rowH,background:'var(--head)',borderRight:'1px solid var(--line2)',borderBottom:'1px solid var(--line2)',display:'flex',alignItems:'center',gap:8,paddingLeft:12,boxSizing:'border-box'}}>
              <span style={{flex:'none',width:8,height:8,borderRadius:'50%',background:gfCol(gi)}}></span>
              <span style={{flex:1,minWidth:0,fontSize:'12.5px',fontWeight:600,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{g.n}</span>
              {qOf(gi)>1&&<span style={{flex:'none',fontFamily:'var(--font-mono)',fontSize:'10.5px',color:'var(--mut)',paddingRight:10}}>×{qOf(gi)}</span>}
            </div>
            {friends.map((f,fi)=>{const has=given.some(x=>x.g===gi&&x.to===fi);const can=has||left>0;
              return <div key={fi} style={{width:colW,height:rowH,borderRight:'1px solid var(--line2)',borderBottom:'1px solid var(--line2)',boxSizing:'border-box'}}>
                <button onClick={()=>has?unassign(gi,fi):assign(gi,fi)} title={has?`Take back from ${f}`:(can?`Give to ${f}`:'None left in pile')} disabled={!can} style={{...cellBtn,cursor:can?'pointer':'default'}} onMouseEnter={e=>{if(can&&!has)e.currentTarget.firstChild.style.opacity=1;}} onMouseLeave={e=>{if(!has)e.currentTarget.firstChild.style.opacity=0;}}>
                  {has?<span style={{width:12,height:12,borderRadius:'50%',background:gfCol(gi)}}></span>
                  :<span style={{width:12,height:12,borderRadius:'50%',border:`1.5px dashed ${can?'var(--mut)':'var(--line2)'}`,boxSizing:'border-box',opacity:0,transition:'opacity .12s'}}></span>}
                </button>
              </div>;})}
            <div style={{width:96,height:rowH,background:'var(--head)',borderBottom:'1px solid var(--line2)',display:'flex',alignItems:'center',justifyContent:'flex-end',paddingRight:14,boxSizing:'border-box',fontFamily:'var(--font-mono)',fontSize:12,color:left===0?'var(--ok)':'var(--ink)',fontWeight:600}}>{left===0?'✓ 0':left}</div>
          </div>;})}
          <div style={{display:'flex'}}>
            <div style={{width:190,height:40,background:'var(--head)',borderRight:'1px solid var(--line2)',display:'flex',alignItems:'center',paddingLeft:12,boxSizing:'border-box',fontSize:'11.5px',fontWeight:600}}>Received</div>
            {friends.map((f,fi)=>{const c=given.filter(x=>x.to===fi).length;
              return <div key={fi} style={{width:colW,height:40,background:'var(--head)',borderRight:'1px solid var(--line2)',display:'flex',alignItems:'center',justifyContent:'center',boxSizing:'border-box',fontFamily:'var(--font-mono)',fontSize:12,color:c===0?'var(--warn)':'var(--mut)'}}>{c}</div>;})}
            <div style={{width:96,height:40,background:'var(--head)',display:'flex',alignItems:'center',justifyContent:'flex-end',paddingRight:14,boxSizing:'border-box',fontFamily:'var(--font-mono)',fontSize:12,color:leftN===0?'var(--ok)':'var(--warn)',fontWeight:600}}>{leftN===0?'✓ 0':leftN}</div>
          </div>
        </div>
      </div>
      <div style={{marginTop:12,fontSize:'11.5px',color:'var(--mut)'}}>Each dot is one handed-out copy — click an empty cell to give that gift, click a dot to take it back. The board and the matrix are two views of the same list.</div>
    </Card>
    :<div>
      <div style={{display:'flex',gap:18,alignItems:'flex-start',flexWrap:'wrap'}}>
        <Card padding="14px 16px" style={{width:280,flex:'none'}}>
          <Overline count={leftN}>GIFTS LEFT</Overline>
          <div style={{marginTop:10,display:'flex',flexDirection:'column',gap:6}}>
            {gifts.map((g,gi)=>{const left=leftOf(gi);if(left<=0)return null;
              return <div key={gi} draggable onDragStart={()=>setDrag(gi)} onDragEnd={()=>{setDrag(null);setOver(null);}} style={{display:'flex',alignItems:'center',gap:8,padding:'7px 10px',border:'1px solid var(--line)',borderRadius:8,background:'var(--surface)',fontSize:'12.5px',fontWeight:500,cursor:'grab',userSelect:'none',opacity:drag===gi?0.5:1}}>
                <span style={{flex:'none',width:8,height:8,borderRadius:'50%',background:gfCol(gi)}}></span>
                <span style={{flex:1,minWidth:0}}>{g.n}</span>
                {left>1&&<span style={{fontFamily:'var(--font-mono)',fontSize:'10.5px',color:'var(--mut)'}}>×{left}</span>}
              </div>;})}
            {leftN===0&&<div style={{padding:12,border:'1px dashed color-mix(in oklab, var(--ok) 45%, var(--line))',borderRadius:9,fontSize:'12.5px',lineHeight:1.45,color:'var(--ok)',fontWeight:600}}>All gifts assigned — nothing left to keep in your head.</div>}
          </div>
          <div style={{display:'flex',gap:6,marginTop:12}}>
            <TextInput placeholder="New gift…" value={newG} onChange={e=>setNewG(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&newG.trim()){setGifts([...gifts,{n:newG.trim(),q:1}]);setNewG('');}}} style={{flex:1}}/>
            <Button variant="secondary" onClick={()=>{if(newG.trim()){setGifts([...gifts,{n:newG.trim(),q:1}]);setNewG('');}}}>Add</Button>
          </div>
        </Card>
        <div style={{flex:1,minWidth:320,display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:14}}>
          {friends.map((f,fi)=>{const mine=given.map((x,vi)=>({x,vi})).filter(o=>o.x.to===fi);
            return <Card key={fi} padding="12px 14px" style={{outline:over===fi?'2px solid var(--accent)':'none'}}
              onDragOver={e=>{e.preventDefault();setOver(fi);}} onDragLeave={()=>setOver(o=>o===fi?null:o)}
              onDrop={e=>{e.preventDefault();if(drag!=null)assign(drag,fi);setDrag(null);setOver(null);}}>
              <div style={{display:'flex',alignItems:'center',gap:8}}>
                <span style={{flex:1,fontSize:13,fontWeight:600}}>{f}</span>
                <Badge tone={mine.length===0?'warn':'ok'}>{mine.length===0?'none yet':mine.length}</Badge>
              </div>
              <div style={{marginTop:8,display:'flex',flexDirection:'column',gap:6,minHeight:44}}>
                {mine.map(o=><span key={o.vi} style={{display:'flex',alignItems:'center',gap:7,padding:'6px 9px',border:'1px solid var(--line)',borderRadius:8,background:'var(--head)',fontSize:'12.5px',fontWeight:500}}>
                  <span style={{flex:'none',width:8,height:8,borderRadius:'50%',background:gfCol(o.x.g)}}></span>
                  <span style={{flex:1,minWidth:0}}>{gifts[o.x.g]?gifts[o.x.g].n:'?'}</span>
                  <button onClick={()=>setGiven(given.filter((_,i)=>i!==o.vi))} title="Take back" style={{flex:'none',width:16,height:16,border:'none',borderRadius:5,background:'none',cursor:'pointer',fontSize:'10.5px',lineHeight:1,color:'var(--mut)',padding:0}}>×</button>
                </span>)}
                {mine.length===0&&<span style={{fontSize:12,color:'var(--mut)',padding:'6px 0'}}>Drop a gift here</span>}
              </div>
              {history.some(h=>h.to===fi)&&<div style={{marginTop:8,paddingTop:8,borderTop:'1px dashed var(--line)',display:'flex',flexDirection:'column',gap:4}}>
                {history.filter(h=>h.to===fi).map((h,hi)=><span key={hi} title={`Already got this — ${h.when}`} style={{display:'flex',alignItems:'center',gap:7,padding:'4px 9px',fontSize:12,color:'var(--mut)',opacity:0.75}}>
                  <span style={{flex:'none',width:8,height:8,borderRadius:'50%',border:'1.5px solid var(--mut)',boxSizing:'border-box'}}></span>
                  <span style={{flex:1,minWidth:0,textDecoration:'line-through',textDecorationColor:'var(--line)'}}>{h.n}</span>
                  <span style={{flex:'none',fontFamily:'var(--font-mono)',fontSize:'10px'}}>{h.when}</span>
                </span>)}
              </div>}
            </Card>;})}
          <button onClick={()=>setFriends([...friends,'Friend '+(friends.length+1)])} style={{minHeight:110,border:'1px dashed var(--line)',borderRadius:12,background:'none',cursor:'pointer',fontSize:'12.5px',fontWeight:500,color:'var(--mut)'}}>+ Add friend</button>
        </div>
      </div>
      <div style={{marginTop:12,fontSize:'11.5px',color:'var(--mut)'}}>Drag a gift onto a friend — each copy leaves the pile as you give it. Switch to Matrix to review who already got what.</div>
    </div>}
  </div>;
}
Object.assign(window,{GiftsScreen});
