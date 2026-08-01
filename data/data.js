// Argmin UI kit — shared demo data (from problems/*/data.js in the source repo)
const KIT = {
  categories: [
    {name:'Network flow',ic:'blue',count:6,desc:'Move things through a network at least cost.',models:[
      {id:'transportation',g:'transportation',name:'Transportation',desc:'Ship goods from warehouses to shops at least cost.'},
      {id:'assignment',g:'assignment',name:'Assignment',desc:'Give each worker exactly one task, minimising total cost.'},
      {id:'transshipment',g:'transshipment',name:'Transshipment',desc:'Route goods through intermediate depots on the way.'},
      {id:'mincostflow',g:'mincostflow',name:'Minimum cost flow',desc:'Push a required amount through a network as cheaply as possible.'},
      {id:'maxflow',g:'maxflow',name:'Maximum flow',desc:'Find the most that can move from source to sink.'},
      {id:'shortestpath',g:'shortestpath',name:'Shortest path',desc:'Cheapest route between two points in a network.'}]},
    {name:'Selection',ic:'teal',count:3,desc:'Choose the best subset under limits.',models:[
      {id:'knapsack',g:'knapsack',name:'Knapsack',tag:'NP-HARD',desc:'Pick the best items that fit a budget or weight — 0/1 and bounded.'},
      {id:'setcovering',g:'setcovering',name:'Set covering',tag:'NP-HARD',desc:'Choose the fewest sets that cover every requirement.'},
      {id:'binpacking',g:'binpacking',name:'Bin packing',tag:'NP-HARD',desc:'Fit items into the fewest containers.'}]},
    {name:'Routing & sequencing',ic:'rose',count:3,desc:'Order and route work well.',models:[
      {id:'tsp',g:'tsp',name:'Travelling salesman',tag:'NP-HARD',desc:'Visit every stop once and return, minimising distance.'},
      {id:'vrp',g:'vrp',name:'Vehicle routing',tag:'NP-HARD',desc:'Split stops across a fleet with capacity limits.'},
      {id:'jobseq',g:'jobseq',name:'Job sequencing',desc:'Order jobs on machines to finish soonest.'}]},
    {name:'Matching',ic:'purple',count:3,desc:'Pair two sides so nobody is left worse off.',models:[
      {id:'stable',g:'stable',name:'Stable matching',desc:'Pair two sides by preference so no pair wants to defect — Gale–Shapley.'},
      {id:'bipartite',g:'bipartite',name:'Bipartite matching',desc:'Match as many pairs as possible across two groups.'},
      {id:'gifts',g:'gifts',name:'Gift assignment',tag:'BOARD',tagTone:'teal',desc:'List gifts by name and hand them out — each one leaves the pile as you give it.'}]}
  ],
  ex: {src:['Denver','Chicago','Atlanta'],dst:['Boston','Newark','Miami','Austin'],costs:[[3,1,7,4],[2,6,5,9],[8,3,3,2]],supply:[300,400,500],demand:[250,350,400,200]},
  final: {'0,1':300,'1,0':250,'1,2':150,'2,1':50,'2,2':250,'2,3':200},
  steps: [
    {label:'Initial solution',sub:'North-West Corner',zt:'4,400',meta:['Z = 4,400','6 basic cells = m+n−1 → non-degenerate'],alloc:{'0,0':250,'0,1':50,'1,1':300,'1,2':100,'2,2':300,'2,3':200},note:'Fill from the top-left, exhausting each row\u2019s supply and each column\u2019s demand in turn. Fast but cost-blind — it lands at Z = 4,400. With 6 basic cells (= m+n−1) the solution is non-degenerate, so MODI can price every empty cell.'},
    {label:'Iteration 1',sub:'enter Chicago → Boston',zt:'2,900',meta:['Δ = −6','θ = 250','Z 4,400 → 2,900'],entering:'1,0',alloc:{'0,0':250,'0,1':50,'1,1':300,'1,2':100,'2,2':300,'2,3':200},deltas:{'0,2':7,'0,3':5,'1,0':-6,'1,3':5,'2,0':2,'2,1':-1},note:'Duals u and v are computed from the 6 basic cells, then every empty cell is priced: Δ = c − u − v. Chicago → Boston prices at Δ = −6 — every unit rerouted there saves 6. Shifting θ = 250 units around the closed loop drops cost to 2,900.'},
    {label:'Iteration 2',sub:'enter Atlanta → Newark',zt:'2,850',meta:['Δ = −1','θ = 50','Z 2,900 → 2,850'],entering:'2,1',alloc:{'0,1':300,'1,0':250,'1,1':50,'1,2':100,'2,2':300,'2,3':200},deltas:{'0,0':6,'0,2':7,'0,3':5,'1,3':5,'2,0':8,'2,1':-1},note:'One cell still prices negative: Atlanta → Newark at Δ = −1. The loop through Chicago\u2019s row shifts θ = 50 units and removes the last inefficiency.'},
    {label:'Optimality check',sub:'all Δ ≥ 0 — proven optimal',zt:'✓',opt:true,meta:['all Δᵢⱼ ≥ 0','Z* = 2,850','unique optimum'],alloc:{'0,1':300,'1,0':250,'1,2':150,'2,1':50,'2,2':250,'2,3':200},deltas:{'0,0':5,'0,2':6,'0,3':4,'1,1':1,'1,3':5,'2,0':8},note:'Every empty cell now has Δ ≥ 0 — no reroute can cut cost further, which proves optimality. No Δ equals 0, so this optimum is unique.'}
  ],
  saved: [
    {g:'transportation',ic:'blue',name:'Denver network',model:'Transportation',size:'3×4',obj:'2,850',badge:'EXACT · MODI',tone:'ok',upd:'2 h ago'},
    {g:'assignment',ic:'blue',name:'Crew rota — March',model:'Assignment',size:'6×6',obj:'41.0 h',badge:'EXACT · HUNGARIAN',tone:'ok',upd:'yesterday'},
    {g:'binpacking',ic:'teal',name:'Pallet loading',model:'Bin packing',size:'48 items',obj:'11 bins',badge:'HEURISTIC · FFD · LB 10',tone:'warn',upd:'3 d ago'},
    {g:'tsp',ic:'rose',name:'Sales loop — Q3',model:'Travelling salesman',size:'12 stops',obj:'342 km',badge:'HEURISTIC · 2-OPT · ≤3%',tone:'warn',upd:'2 w ago'},
    {g:'shortestpath',ic:'blue',name:'Campus shuttle',model:'Shortest path',size:'24 nodes',obj:'17.4 km',badge:'EXACT · DIJKSTRA',tone:'ok',upd:'3 w ago'}
  ]
};
// Glyph: fetches an assets/glyphs SVG and inlines it so currentColor tints apply
function Glyph({name,w=50,h=34}){
  const [svg,setSvg]=React.useState(null);
  React.useEffect(()=>{let on=true;fetch('../../assets/glyphs/'+name+'.svg').then(r=>r.text()).then(t=>{if(on)setSvg(t.replace('width="38" height="26"',`width="${w}" height="${h}"`));});return()=>{on=false;};},[name]);
  return <span style={{display:'inline-flex'}} dangerouslySetInnerHTML={{__html:svg||`<svg width="${w}" height="${h}"></svg>`}}/>;
}
Object.assign(window,{KIT,Glyph});
