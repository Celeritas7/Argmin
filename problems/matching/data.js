// Matching models — stable matching / bipartite preference samples
export function prefSample(id){
    if(id==='stable')return{lHead:'STUDENTS',rHead:'HOSPITALS',lOne:'student',rOne:'hospital',left:[{n:'Rio',p:[0,1,2]},{n:'Sam',p:[1,0,2]},{n:'Tess',p:[0,2,1]}],right:[{n:'City General',p:[1,0,2]},{n:'Mercy',p:[0,2,1]},{n:'St. Jude',p:[2,1,0]}]};
    return{lHead:'WORKERS',rHead:'SHIFTS',lOne:'worker',rOne:'shift',left:[{n:'Ines',p:[0,2,1]},{n:'Jo',p:[1,0,2]},{n:'Kai',p:[2,1,0]}],right:[{n:'Early',p:[0,1,2]},{n:'Late',p:[2,0,1]},{n:'Weekend',p:[1,2,0]}]};}
