var us={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xm=0,Jh=1,qm=2;var Gd=1,Ym=2,yi=3,bn=0,Gt=1,gt=2;var It=0,Us=1,Qh=2,ef=3,tf=4,pu=5,Cn=100,jm=101,Zm=102,nf=103,sf=104,Zs=200,$m=201,Km=202,Jm=203,El=204,Al=205,Fa=206,Qm=207,Ba=208,eg=209,tg=210,ng=211,ig=212,sg=213,rg=214,og=0,ag=1,cg=2,ia=3,lg=4,ug=5,hg=6,fg=7,Wd=0,dg=1,pg=2,Hn=0,mu=1,gu=2,xu=3,$r=4,mg=5,_u=6,rf="attached",gg="detached",Xd=300,Bs=301,zs=302,wl=303,Rl=304,za=306,Sn=1e3,vn=1001,Fr=1002,Mt=1003,sa=1004;var Pr=1005;var cn=1006,yu=1007;var Ui=1008;var si=1009,xg=1010,_g=1011,vu=1012,qd=1013,Di=1014,vi=1015,ri=1016,Yd=1017,jd=1018,bi=1020,yg=1021,fn=1023,vg=1024,Mg=1025,is=1026,Oi=1027,bg=1028,Zd=1029,Sg=1030,$d=1031,Kd=1033,Gc=33776,Wc=33777,Xc=33778,qc=33779,of=35840,af=35841,cf=35842,lf=35843,Jd=36196,uf=37492,hf=37496,ff=37808,df=37809,pf=37810,mf=37811,gf=37812,xf=37813,_f=37814,yf=37815,vf=37816,Mf=37817,bf=37818,Sf=37819,Tf=37820,Ef=37821,Yc=36492,Af=36494,wf=36495,Tg=36283,Rf=36284,Cf=36285,Pf=36286;var ks=2300,rs=2301,jc=2302,Lf=2400,If=2401,Df=2402,Eg=2500;var Qd=0,ka=1,Kr=2,ep=3e3,ss=3001,Ag=3200,wg=3201,Mu=0,Rg=1,Pn="",at="srgb",pt="srgb-linear",bu="display-p3",Ha="display-p3-linear",ra="linear",ct="srgb",oa="rec709",aa="p3";var gs=7680;var Nf=519,Cg=512,Pg=513,Lg=514,tp=515,Ig=516,Dg=517,Ng=518,Ug=519,Cl=35044;var Uf="300 es",Pl=1035,Mi=2e3,ca=2001,oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Of=1234567,Lr=Math.PI/180,Hs=180/Math.PI;function Vn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[s&255]+$t[s>>8&255]+$t[s>>16&255]+$t[s>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function wt(s,e,t){return Math.max(e,Math.min(t,s))}function Su(s,e){return(s%e+e)%e}function Og(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Fg(s,e,t){return s!==e?(t-s)/(e-s):0}function Ir(s,e,t){return(1-t)*s+t*e}function Bg(s,e,t,n){return Ir(s,e,1-Math.exp(-t*n))}function zg(s,e=1){return e-Math.abs(Su(s,e*2)-e)}function kg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Hg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Vg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Gg(s,e){return s+Math.random()*(e-s)}function Wg(s){return s*(.5-Math.random())}function Xg(s){s!==void 0&&(Of=s);let e=Of+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qg(s){return s*Lr}function Yg(s){return s*Hs}function Ll(s){return(s&s-1)===0&&s!==0}function jg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function la(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zg(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*f,c*h,a*l);break;case"YZY":s.set(c*h,a*u,c*f,a*l);break;case"ZXZ":s.set(c*f,c*h,a*u,a*l);break;case"XZX":s.set(a*u,c*g,c*p,a*l);break;case"YXY":s.set(c*p,a*u,c*g,a*l);break;case"ZYZ":s.set(c*g,c*p,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ii(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ot(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var $s={DEG2RAD:Lr,RAD2DEG:Hs,generateUUID:Vn,clamp:wt,euclideanModulo:Su,mapLinear:Og,inverseLerp:Fg,lerp:Ir,damp:Bg,pingpong:zg,smoothstep:kg,smootherstep:Hg,randInt:Vg,randFloat:Gg,randFloatSpread:Wg,seededRandom:Xg,degToRad:qg,radToDeg:Yg,isPowerOfTwo:Ll,ceilPowerOfTwo:jg,floorPowerOfTwo:la,setQuaternionFromProperEuler:Zg,normalize:ot,denormalize:ii},re=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],y=i[1],x=i[4],v=i[7],S=i[2],b=i[5],T=i[8];return r[0]=o*_+a*y+c*S,r[3]=o*m+a*x+c*b,r[6]=o*d+a*v+c*T,r[1]=l*_+u*y+f*S,r[4]=l*m+u*x+f*b,r[7]=l*d+u*v+f*T,r[2]=h*_+p*y+g*S,r[5]=h*m+p*x+g*b,r[8]=h*d+p*v+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*r,p=l*r-o*c,g=t*f+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=h*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zc.makeScale(e,t)),this}rotate(e){return this.premultiply(Zc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zc=new We;function np(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $g(){let s=Br("canvas");return s.style.display="block",s}var Ff={};function Dr(s){s in Ff||(Ff[s]=!0,console.warn(s))}var Bf=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zf=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wo={[pt]:{transfer:ra,primaries:oa,toReference:s=>s,fromReference:s=>s},[at]:{transfer:ct,primaries:oa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ha]:{transfer:ra,primaries:aa,toReference:s=>s.applyMatrix3(zf),fromReference:s=>s.applyMatrix3(Bf)},[bu]:{transfer:ct,primaries:aa,toReference:s=>s.convertSRGBToLinear().applyMatrix3(zf),fromReference:s=>s.applyMatrix3(Bf).convertLinearToSRGB()}},Kg=new Set([pt,Ha]),Ke={enabled:!0,_workingColorSpace:pt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Kg.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=wo[e].toReference,i=wo[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return wo[s].primaries},getTransfer:function(s){return s===Pn?ra:wo[s].transfer}};function Os(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $c(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var xs,ua=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xs===void 0&&(xs=Br("canvas")),xs.width=e.width,xs.height=e.height;let n=xs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Br("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Os(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Os(t[n]/255)*255):t[n]=Os(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jg=0,ha=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=Vn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Kc(i[o].image)):r.push(Kc(i[o]))}else r=Kc(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Kc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ua.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qg=0,Jt=class s extends oi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=vn,i=vn,r=cn,o=Ui,a=fn,c=si,l=s.DEFAULT_ANISOTROPY,u=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Vn(),this.name="",this.source=new ha(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ss?at:Pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sn:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case Fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sn:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case Fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===at?ss:ep}set encoding(e){Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ss?at:Pn}};Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Xd;Jt.DEFAULT_ANISOTROPY=1;var lt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,v=(p+1)/2,S=(d+1)/2,b=(u+h)/4,T=(f+_)/4,P=(g+m)/4;return x>v&&x>S?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=b/n,r=T/n):v>S?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=b/i,r=P/i):S<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(S),n=T/r,i=P/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((l+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Il=class extends oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Dr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ss?at:Pn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Jt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ha(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yt=class extends Il{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fa=class extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dl=class extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3],h=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==h||l!==p||u!==g){let m=1-a,d=c*h+l*p+u*g+f*_,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let S=Math.sqrt(x),b=Math.atan2(S,d*y);m=Math.sin(m*b)/S,a=Math.sin(a*b)/S}let v=a*y;if(c=c*m+h*v,l=l*m+p*v,u=u*m+g*v,f=f*m+_*v,m===1-a){let S=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=S,l*=S,u*=S,f*=S}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=r[o],h=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*f+c*p-l*h,e[t+1]=c*g+u*h+l*f-a*p,e[t+2]=l*g+u*p+a*h-c*f,e[t+3]=u*g-a*f-c*h-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(r/2),h=c(n/2),p=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f+h*p*g;break;case"YZX":this._x=h*u*f+l*p*g,this._y=l*p*f+h*u*g,this._z=l*u*g-h*p*f,this._w=l*u*f-h*p*g;break;case"XZY":this._x=h*u*f-l*p*g,this._y=l*p*f-h*u*g,this._z=l*u*g+h*p*f,this._w=l*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(o-i)*p}else if(n>a&&n>f){let p=2*Math.sqrt(1+n-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+l)/p}else if(a>f){let p=2*Math.sqrt(1+a-n-f);this._w=(r-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+f-n-a);this._w=(o-i)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(kf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(kf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=i+c*f+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Jc=new w,kf=new dn,nt=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(r,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sr),Co.subVectors(this.max,Sr),_s.subVectors(e.a,Sr),ys.subVectors(e.b,Sr),vs.subVectors(e.c,Sr),Ri.subVectors(ys,_s),Ci.subVectors(vs,ys),Ki.subVectors(_s,vs);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Ki.z,Ki.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Ki.z,0,-Ki.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Ki.y,Ki.x,0];return!Qc(t,_s,ys,vs,Co)||(t=[1,0,0,0,1,0,0,0,1],!Qc(t,_s,ys,vs,Co))?!1:(Po.crossVectors(Ri,Ci),t=[Po.x,Po.y,Po.z],Qc(t,_s,ys,vs,Co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},di=[new w,new w,new w,new w,new w,new w,new w,new w],Bn=new w,Ro=new nt,_s=new w,ys=new w,vs=new w,Ri=new w,Ci=new w,Ki=new w,Sr=new w,Co=new w,Po=new w,Ji=new w;function Qc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ji.fromArray(s,r);let a=i.x*Math.abs(Ji.x)+i.y*Math.abs(Ji.y)+i.z*Math.abs(Ji.z),c=e.dot(Ji),l=t.dot(Ji),u=n.dot(Ji);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var e0=new nt,Tr=new w,el=new w,ln=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):e0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tr.subVectors(e,this.center);let t=Tr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Tr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tr.copy(e.center).add(el)),this.expandByPoint(Tr.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},pi=new w,tl=new w,Lo=new w,Pi=new w,nl=new w,Io=new w,il=new w,Gn=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){tl.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(tl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Lo),a=Pi.dot(this.direction),c=-Pi.dot(Lo),l=Pi.lengthSq(),u=Math.abs(1-o*o),f,h,p,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){let _=1/u;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),p=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(tl).addScaledVector(Lo,h),p}intersectSphere(e,t){pi.subVectors(e.center,this.origin);let n=pi.dot(this.direction),i=pi.dot(pi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,i,r){nl.subVectors(t,e),Io.subVectors(n,e),il.crossVectors(nl,Io);let o=this.direction.dot(il),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,e);let c=a*this.direction.dot(Io.crossVectors(Pi,Io));if(c<0)return null;let l=a*this.direction.dot(nl.cross(Pi));if(l<0||c+l>o)return null;let u=-a*Pi.dot(il);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class s{constructor(e,t,n,i,r,o,a,c,l,u,f,h,p,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,f,h,p,g,_,m)}set(e,t,n,i,r,o,a,c,l,u,f,h,p,g,_,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ms.setFromMatrixColumn(e,0).length(),r=1/Ms.setFromMatrixColumn(e,1).length(),o=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=o*u,p=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=h-_*l,t[9]=-a*c,t[2]=_-h*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,p=c*f,g=l*u,_=l*f;t[0]=h+_*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=_+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,p=c*f,g=l*u,_=l*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,p=o*f,g=a*u,_=a*f;t[0]=c*u,t[4]=g*l-p,t[8]=h*l+_,t[1]=c*f,t[5]=_*l+h,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){let h=o*c,p=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+_,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t0,e,n0)}lookAt(e,t,n){let i=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Li.crossVectors(n,_n),Li.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Li.crossVectors(n,_n)),Li.normalize(),Do.crossVectors(_n,Li),i[0]=Li.x,i[4]=Do.x,i[8]=_n.x,i[1]=Li.y,i[5]=Do.y,i[9]=_n.y,i[2]=Li.z,i[6]=Do.z,i[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],y=n[3],x=n[7],v=n[11],S=n[15],b=i[0],T=i[4],P=i[8],M=i[12],E=i[1],D=i[5],N=i[9],B=i[13],L=i[2],O=i[6],H=i[10],j=i[14],Y=i[3],W=i[7],Z=i[11],ee=i[15];return r[0]=o*b+a*E+c*L+l*Y,r[4]=o*T+a*D+c*O+l*W,r[8]=o*P+a*N+c*H+l*Z,r[12]=o*M+a*B+c*j+l*ee,r[1]=u*b+f*E+h*L+p*Y,r[5]=u*T+f*D+h*O+p*W,r[9]=u*P+f*N+h*H+p*Z,r[13]=u*M+f*B+h*j+p*ee,r[2]=g*b+_*E+m*L+d*Y,r[6]=g*T+_*D+m*O+d*W,r[10]=g*P+_*N+m*H+d*Z,r[14]=g*M+_*B+m*j+d*ee,r[3]=y*b+x*E+v*L+S*Y,r[7]=y*T+x*D+v*O+S*W,r[11]=y*P+x*N+v*H+S*Z,r[15]=y*M+x*B+v*j+S*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*c*f-i*l*f-r*a*h+n*l*h+i*a*p-n*c*p)+_*(+t*c*p-t*l*h+r*o*h-i*o*p+i*l*u-r*c*u)+m*(+t*l*f-t*a*p-r*o*f+n*o*p+r*a*u-n*l*u)+d*(-i*a*u-t*c*f+t*a*h+i*o*f-n*o*h+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],y=f*m*l-_*h*l+_*c*p-a*m*p-f*c*d+a*h*d,x=g*h*l-u*m*l-g*c*p+o*m*p+u*c*d-o*h*d,v=u*_*l-g*f*l+g*a*p-o*_*p-u*a*d+o*f*d,S=g*f*c-u*_*c-g*a*h+o*_*h+u*a*m-o*f*m,b=t*y+n*x+i*v+r*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/b;return e[0]=y*T,e[1]=(_*h*r-f*m*r-_*i*p+n*m*p+f*i*d-n*h*d)*T,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*d+n*c*d)*T,e[3]=(f*c*r-a*h*r-f*i*l+n*h*l+a*i*p-n*c*p)*T,e[4]=x*T,e[5]=(u*m*r-g*h*r+g*i*p-t*m*p-u*i*d+t*h*d)*T,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*d-t*c*d)*T,e[7]=(o*h*r-u*c*r+u*i*l-t*h*l-o*i*p+t*c*p)*T,e[8]=v*T,e[9]=(g*f*r-u*_*r-g*n*p+t*_*p+u*n*d-t*f*d)*T,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*d+t*a*d)*T,e[11]=(u*a*r-o*f*r-u*n*l+t*f*l+o*n*p-t*a*p)*T,e[12]=S*T,e[13]=(u*_*i-g*f*i+g*n*h-t*_*h-u*n*m+t*f*m)*T,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*T,e[15]=(o*f*i-u*a*i+u*n*c-t*f*c-o*n*h+t*a*h)*T,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,f=a+a,h=r*l,p=r*u,g=r*f,_=o*u,m=o*f,d=a*f,y=c*l,x=c*u,v=c*f,S=n.x,b=n.y,T=n.z;return i[0]=(1-(_+d))*S,i[1]=(p+v)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(p-v)*b,i[5]=(1-(h+d))*b,i[6]=(m+y)*b,i[7]=0,i[8]=(g+x)*T,i[9]=(m-y)*T,i[10]=(1-(h+_))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Ms.set(i[0],i[1],i[2]).length(),o=Ms.set(i[4],i[5],i[6]).length(),a=Ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],zn.copy(this);let l=1/r,u=1/o,f=1/a;return zn.elements[0]*=l,zn.elements[1]*=l,zn.elements[2]*=l,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,t.setFromRotationMatrix(zn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Mi){let c=this.elements,l=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i),p,g;if(a===Mi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ca)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Mi){let c=this.elements,l=1/(t-e),u=1/(n-i),f=1/(o-r),h=(t+e)*l,p=(n+i)*u,g,_;if(a===Mi)g=(o+r)*f,_=-2*f;else if(a===ca)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ms=new w,zn=new Se,t0=new w(0,0,0),n0=new w(1,1,1),Li=new w,Do=new w,_n=new w,Hf=new Se,Vf=new dn,da=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vf.setFromEuler(this),this.setFromQuaternion(Vf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};da.DEFAULT_ORDER="XYZ";var zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},i0=0,Gf=new w,bs=new dn,mi=new Se,No=new w,Er=new w,s0=new w,r0=new dn,Wf=new w(1,0,0),Xf=new w(0,1,0),qf=new w(0,0,1),o0={type:"added"},a0={type:"removed"},xt=class s extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Vn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new w,t=new da,n=new dn,i=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Se},normalMatrix:{value:new We}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Wf,e)}rotateY(e){return this.rotateOnAxis(Xf,e)}rotateZ(e){return this.rotateOnAxis(qf,e)}translateOnAxis(e,t){return Gf.copy(e).applyQuaternion(this.quaternion),this.position.add(Gf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wf,e)}translateY(e){return this.translateOnAxis(Xf,e)}translateZ(e){return this.translateOnAxis(qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?No.copy(e):No.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Er,No,this.up):mi.lookAt(No,Er,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),bs.setFromRotationMatrix(mi),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(o0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(a0)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,s0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,r0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};xt.DEFAULT_UP=new w(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var kn=new w,gi=new w,sl=new w,xi=new w,Ss=new w,Ts=new w,Yf=new w,rl=new w,ol=new w,al=new w,Uo=!1,Mn=class s{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),kn.subVectors(e,t),i.cross(kn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){kn.subVectors(i,t),gi.subVectors(n,t),sl.subVectors(e,t);let o=kn.dot(kn),a=kn.dot(gi),c=kn.dot(sl),l=gi.dot(gi),u=gi.dot(sl),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,p=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getUV(e,t,n,i,r,o,a,c){return Uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Uo=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xi.x),c.addScaledVector(o,xi.y),c.addScaledVector(a,xi.z),c)}static isFrontFacing(e,t,n,i){return kn.subVectors(n,t),gi.subVectors(e,t),kn.cross(gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),kn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Uo=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ss.subVectors(i,n),Ts.subVectors(r,n),rl.subVectors(e,n);let c=Ss.dot(rl),l=Ts.dot(rl);if(c<=0&&l<=0)return t.copy(n);ol.subVectors(e,i);let u=Ss.dot(ol),f=Ts.dot(ol);if(u>=0&&f<=u)return t.copy(i);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ss,o);al.subVectors(e,r);let p=Ss.dot(al),g=Ts.dot(al);if(g>=0&&p<=g)return t.copy(r);let _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ts,a);let m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Yf.subVectors(r,i),a=(f-u)/(f-u+(p-g)),t.copy(i).addScaledVector(Yf,a);let d=1/(m+_+h);return o=_*d,a=h*d,t.copy(n).addScaledVector(Ss,o).addScaledVector(Ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function cl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var _e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Su(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=cl(o,r,e+1/3),this.g=cl(o,r,e),this.b=cl(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=at){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){let n=ip[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=$c(e.r),this.g=$c(e.g),this.b=$c(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return Ke.fromWorkingColorSpace(Kt.copy(this),e),Math.round(wt(Kt.r*255,0,255))*65536+Math.round(wt(Kt.g*255,0,255))*256+Math.round(wt(Kt.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Kt.copy(this),t);let n=Kt.r,i=Kt.g,r=Kt.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=at){Ke.fromWorkingColorSpace(Kt.copy(this),e);let t=Kt.r,n=Kt.g,i=Kt.b;return e!==at?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Oo);let n=Ir(Ii.h,Oo.h,t),i=Ir(Ii.s,Oo.s,t),r=Ir(Ii.l,Oo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new _e;_e.NAMES=ip;var c0=0,pn=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Vn(),this.name="",this.type="Material",this.blending=Us,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=Al,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==El&&(n.blendSrc=this.blendSrc),this.blendDst!==Al&&(n.blendDst=this.blendDst),this.blendEquation!==Cn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ia&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Qt=class extends pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var At=new w,Fo=new re,st=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cl&&(e.usage=this.usage),e}};var pa=class extends st{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ma=class extends st{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Rt=class extends st{constructor(e,t,n){super(new Float32Array(e),t,n)}};var l0=0,Rn=new Se,ll=new xt,Es=new w,yn=new nt,Ar=new nt,Vt=new w,Dt=class s extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=Vn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(np(e)?ma:pa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Rt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new w,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ar.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(yn.min,Ar.min),yn.expandByPoint(Vt),Vt.addVectors(yn.max,Ar.max),yn.expandByPoint(Vt)):(yn.expandByPoint(Ar.min),yn.expandByPoint(Ar.max))}yn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Vt.fromBufferAttribute(a,l),c&&(Es.fromBufferAttribute(e,l),Vt.add(Es)),i=Math.max(i,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new st(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let E=0;E<a;E++)l[E]=new w,u[E]=new w;let f=new w,h=new w,p=new w,g=new re,_=new re,m=new re,d=new w,y=new w;function x(E,D,N){f.fromArray(i,E*3),h.fromArray(i,D*3),p.fromArray(i,N*3),g.fromArray(o,E*2),_.fromArray(o,D*2),m.fromArray(o,N*2),h.sub(f),p.sub(f),_.sub(g),m.sub(g);let B=1/(_.x*m.y-m.x*_.y);isFinite(B)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(B),y.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(B),l[E].add(d),l[D].add(d),l[N].add(d),u[E].add(y),u[D].add(y),u[N].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let E=0,D=v.length;E<D;++E){let N=v[E],B=N.start,L=N.count;for(let O=B,H=B+L;O<H;O+=3)x(n[O+0],n[O+1],n[O+2])}let S=new w,b=new w,T=new w,P=new w;function M(E){T.fromArray(r,E*3),P.copy(T);let D=l[E];S.copy(D),S.sub(T.multiplyScalar(T.dot(D))).normalize(),b.crossVectors(P,D);let B=b.dot(u[E])<0?-1:1;c[E*4]=S.x,c[E*4+1]=S.y,c[E*4+2]=S.z,c[E*4+3]=B}for(let E=0,D=v.length;E<D;++E){let N=v[E],B=N.start,L=N.count;for(let O=B,H=B+L;O<H;O+=3)M(n[O+0]),M(n[O+1]),M(n[O+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new st(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);let i=new w,r=new w,o=new w,a=new w,c=new w,l=new w,u=new w,f=new w;if(e)for(let h=0,p=e.count;h<p;h+=3){let g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*u;for(let d=0;d<u;d++)h[g++]=l[p++]}return new st(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],p=e(h,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jf=new Se,Qi=new Gn,Bo=new ln,Zf=new w,As=new w,ws=new w,Rs=new w,ul=new w,zo=new w,ko=new re,Ho=new re,Vo=new re,$f=new w,Kf=new w,Jf=new w,Go=new w,Wo=new w,$e=class extends xt{constructor(e=new Dt,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){zo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(ul.fromBufferAttribute(f,e),o?zo.addScaledVector(ul,u):zo.addScaledVector(ul.sub(t),u))}t.add(zo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(Bo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Bo,Zf)===null||Qi.origin.distanceToSquared(Zf)>(e.far-e.near)**2))&&(jf.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(jf),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let m=h[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,S=x;v<S;v+=3){let b=a.getX(v),T=a.getX(v+1),P=a.getX(v+2);i=Xo(this,d,e,n,l,u,f,b,T,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let y=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);i=Xo(this,o,e,n,l,u,f,y,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){let m=h[g],d=o[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,S=x;v<S;v+=3){let b=v,T=v+1,P=v+2;i=Xo(this,d,e,n,l,u,f,b,T,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let y=m,x=m+1,v=m+2;i=Xo(this,o,e,n,l,u,f,y,x,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function u0(s,e,t,n,i,r,o,a){let c;if(e.side===Gt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===bn,a),c===null)return null;Wo.copy(a),Wo.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Wo);return l<t.near||l>t.far?null:{distance:l,point:Wo.clone(),object:s}}function Xo(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,As),s.getVertexPosition(c,ws),s.getVertexPosition(l,Rs);let u=u0(s,e,t,n,As,ws,Rs,Go);if(u){i&&(ko.fromBufferAttribute(i,a),Ho.fromBufferAttribute(i,c),Vo.fromBufferAttribute(i,l),u.uv=Mn.getInterpolation(Go,As,ws,Rs,ko,Ho,Vo,new re)),r&&(ko.fromBufferAttribute(r,a),Ho.fromBufferAttribute(r,c),Vo.fromBufferAttribute(r,l),u.uv1=Mn.getInterpolation(Go,As,ws,Rs,ko,Ho,Vo,new re),u.uv2=u.uv1),o&&($f.fromBufferAttribute(o,a),Kf.fromBufferAttribute(o,c),Jf.fromBufferAttribute(o,l),u.normal=Mn.getInterpolation(Go,As,ws,Rs,$f,Kf,Jf,new w),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new w,materialIndex:0};Mn.getNormal(As,ws,Rs,f.normal),u.face=f}return u}var os=class s extends Dt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(u,3)),this.setAttribute("uv",new Rt(f,2));function g(_,m,d,y,x,v,S,b,T,P,M){let E=v/T,D=S/P,N=v/2,B=S/2,L=b/2,O=T+1,H=P+1,j=0,Y=0,W=new w;for(let Z=0;Z<H;Z++){let ee=Z*D-B;for(let ue=0;ue<O;ue++){let q=ue*E-N;W[_]=q*y,W[m]=ee*x,W[d]=L,l.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[d]=b>0?1:-1,u.push(W.x,W.y,W.z),f.push(ue/T),f.push(1-Z/P),j+=1}}for(let Z=0;Z<P;Z++)for(let ee=0;ee<T;ee++){let ue=h+ee+O*Z,q=h+ee+O*(Z+1),K=h+(ee+1)+O*(Z+1),fe=h+(ee+1)+O*Z;c.push(ue,q,fe),c.push(q,K,fe),Y+=6}a.addGroup(p,Y,M),p+=Y,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Vs(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function an(s){let e={};for(let t=0;t<s.length;t++){let n=Vs(s[t]);for(let i in n)e[i]=n[i]}return e}function h0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function sp(s){return s.getRenderTarget()===null?s.outputColorSpace:Ke.workingColorSpace}var Yn={clone:Vs,merge:an},f0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nt=class extends pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f0,this.fragmentShader=d0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=h0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ga=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Lt=class extends ga{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Cs=-90,Ps=1,Nl=class extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Lt(Cs,Ps,e,t);i.layers=this.layers,this.add(i);let r=new Lt(Cs,Ps,e,t);r.layers=this.layers,this.add(r);let o=new Lt(Cs,Ps,e,t);o.layers=this.layers,this.add(o);let a=new Lt(Cs,Ps,e,t);a.layers=this.layers,this.add(a);let c=new Lt(Cs,Ps,e,t);c.layers=this.layers,this.add(c);let l=new Lt(Cs,Ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},xa=class extends Jt{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Bs,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ul=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Dr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ss?at:Pn),this.texture=new xa(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new os(5,5,5),r=new Nt({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:It});r.uniforms.tEquirect.value=t;let o=new $e(i,r),a=t.minFilter;return t.minFilter===Ui&&(t.minFilter=cn),new Nl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},hl=new w,p0=new w,m0=new We,qt=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=hl.subVectors(n,t).cross(p0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(hl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||m0.getNormalMatrix(e),i=this.coplanarPoint(hl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},es=new ln,qo=new w,kr=class{constructor(e=new qt,t=new qt,n=new qt,i=new qt,r=new qt,o=new qt){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],f=i[6],h=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],y=i[13],x=i[14],v=i[15];if(n[0].setComponents(c-r,h-l,m-p,v-d).normalize(),n[1].setComponents(c+r,h+l,m+p,v+d).normalize(),n[2].setComponents(c+o,h+u,m+g,v+y).normalize(),n[3].setComponents(c-o,h-u,m-g,v-y).normalize(),n[4].setComponents(c-a,h-f,m-_,v-x).normalize(),t===Mi)n[5].setComponents(c+a,h+f,m+_,v+x).normalize();else if(t===ca)n[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(qo.x=i.normal.x>0?e.max.x:e.min.x,qo.y=i.normal.y>0?e.max.y:e.min.y,qo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rp(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function g0(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,u){let f=l.array,h=l.usage,p=f.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,f,h),l.onUploadCallback();let _;if(f instanceof Float32Array)_=s.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=s.SHORT;else if(f instanceof Uint32Array)_=s.UNSIGNED_INT;else if(f instanceof Int32Array)_=s.INT;else if(f instanceof Int8Array)_=s.BYTE;else if(f instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,u,f){let h=u.array,p=u._updateRange,g=u.updateRanges;if(s.bindBuffer(f,l),p.count===-1&&g.length===0&&s.bufferSubData(f,0,h),g.length!==0){for(let _=0,m=g.length;_<m;_++){let d=g[_];t?s.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):s.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(t?s.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):s.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let f=n.get(l);if(f===void 0)n.set(l,i(l,u));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,l,u),f.version=l.version}}return{get:o,remove:a,update:c}}var Ol=class s extends Dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=e/a,h=t/c,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){let y=d*h-o;for(let x=0;x<l;x++){let v=x*f-r;g.push(v,-y,0),_.push(0,0,1),m.push(x/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<a;y++){let x=y+l*d,v=y+l*(d+1),S=y+1+l*(d+1),b=y+1+l*d;p.push(x,v,b),p.push(v,S,b)}this.setIndex(p),this.setAttribute("position",new Rt(g,3)),this.setAttribute("normal",new Rt(_,3)),this.setAttribute("uv",new Rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,b0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,A0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,w0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,P0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,L0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,I0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,D0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,F0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,k0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,H0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,G0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y0="gl_FragColor = linearToOutputTexel( gl_FragColor );",j0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Z0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,J0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ix=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rx=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ux=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_x=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Px=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Dx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ux=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,t_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,n_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,s_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,o_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,u_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,h_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,m_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,g_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,S_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,T_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,L_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,U_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,F_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,B_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,H_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,j_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:x0,alphahash_pars_fragment:_0,alphamap_fragment:y0,alphamap_pars_fragment:v0,alphatest_fragment:M0,alphatest_pars_fragment:b0,aomap_fragment:S0,aomap_pars_fragment:T0,batching_pars_vertex:E0,batching_vertex:A0,begin_vertex:w0,beginnormal_vertex:R0,bsdfs:C0,iridescence_fragment:P0,bumpmap_pars_fragment:L0,clipping_planes_fragment:I0,clipping_planes_pars_fragment:D0,clipping_planes_pars_vertex:N0,clipping_planes_vertex:U0,color_fragment:O0,color_pars_fragment:F0,color_pars_vertex:B0,color_vertex:z0,common:k0,cube_uv_reflection_fragment:H0,defaultnormal_vertex:V0,displacementmap_pars_vertex:G0,displacementmap_vertex:W0,emissivemap_fragment:X0,emissivemap_pars_fragment:q0,colorspace_fragment:Y0,colorspace_pars_fragment:j0,envmap_fragment:Z0,envmap_common_pars_fragment:$0,envmap_pars_fragment:K0,envmap_pars_vertex:J0,envmap_physical_pars_fragment:ux,envmap_vertex:Q0,fog_vertex:ex,fog_pars_vertex:tx,fog_fragment:nx,fog_pars_fragment:ix,gradientmap_pars_fragment:sx,lightmap_fragment:rx,lightmap_pars_fragment:ox,lights_lambert_fragment:ax,lights_lambert_pars_fragment:cx,lights_pars_begin:lx,lights_toon_fragment:hx,lights_toon_pars_fragment:fx,lights_phong_fragment:dx,lights_phong_pars_fragment:px,lights_physical_fragment:mx,lights_physical_pars_fragment:gx,lights_fragment_begin:xx,lights_fragment_maps:_x,lights_fragment_end:yx,logdepthbuf_fragment:vx,logdepthbuf_pars_fragment:Mx,logdepthbuf_pars_vertex:bx,logdepthbuf_vertex:Sx,map_fragment:Tx,map_pars_fragment:Ex,map_particle_fragment:Ax,map_particle_pars_fragment:wx,metalnessmap_fragment:Rx,metalnessmap_pars_fragment:Cx,morphcolor_vertex:Px,morphnormal_vertex:Lx,morphtarget_pars_vertex:Ix,morphtarget_vertex:Dx,normal_fragment_begin:Nx,normal_fragment_maps:Ux,normal_pars_fragment:Ox,normal_pars_vertex:Fx,normal_vertex:Bx,normalmap_pars_fragment:zx,clearcoat_normal_fragment_begin:kx,clearcoat_normal_fragment_maps:Hx,clearcoat_pars_fragment:Vx,iridescence_pars_fragment:Gx,opaque_fragment:Wx,packing:Xx,premultiplied_alpha_fragment:qx,project_vertex:Yx,dithering_fragment:jx,dithering_pars_fragment:Zx,roughnessmap_fragment:$x,roughnessmap_pars_fragment:Kx,shadowmap_pars_fragment:Jx,shadowmap_pars_vertex:Qx,shadowmap_vertex:e_,shadowmask_pars_fragment:t_,skinbase_vertex:n_,skinning_pars_vertex:i_,skinning_vertex:s_,skinnormal_vertex:r_,specularmap_fragment:o_,specularmap_pars_fragment:a_,tonemapping_fragment:c_,tonemapping_pars_fragment:l_,transmission_fragment:u_,transmission_pars_fragment:h_,uv_pars_fragment:f_,uv_pars_vertex:d_,uv_vertex:p_,worldpos_vertex:m_,background_vert:g_,background_frag:x_,backgroundCube_vert:__,backgroundCube_frag:y_,cube_vert:v_,cube_frag:M_,depth_vert:b_,depth_frag:S_,distanceRGBA_vert:T_,distanceRGBA_frag:E_,equirect_vert:A_,equirect_frag:w_,linedashed_vert:R_,linedashed_frag:C_,meshbasic_vert:P_,meshbasic_frag:L_,meshlambert_vert:I_,meshlambert_frag:D_,meshmatcap_vert:N_,meshmatcap_frag:U_,meshnormal_vert:O_,meshnormal_frag:F_,meshphong_vert:B_,meshphong_frag:z_,meshphysical_vert:k_,meshphysical_frag:H_,meshtoon_vert:V_,meshtoon_frag:G_,points_vert:W_,points_frag:X_,shadow_vert:q_,shadow_frag:Y_,sprite_vert:j_,sprite_frag:Z_},le={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ni={basic:{uniforms:an([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:an([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:an([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:an([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:an([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new _e(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:an([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:an([le.points,le.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:an([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:an([le.common,le.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:an([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:an([le.sprite,le.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:an([le.common,le.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:an([le.lights,le.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ni.physical={uniforms:an([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Yo={r:0,b:0,g:0};function $_(s,e,t,n,i,r,o){let a=new _e(0),c=r===!0?0:1,l,u,f=null,h=0,p=null;function g(m,d){let y=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),y=!0);let v=s.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===za)?(u===void 0&&(u=new $e(new os(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Vs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(x.colorSpace)!==ct,(f!==x||h!==x.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new $e(new Ol(2,2),new Nt({name:"BackgroundMaterial",uniforms:Vs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,f=x,h=x.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,d){m.getRGB(Yo,sp(s)),n.buffers.color.setClear(Yo.r,Yo.g,Yo.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),c=d,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function K_(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,u=!1;function f(L,O,H,j,Y){let W=!1;if(o){let Z=_(j,H,O);l!==Z&&(l=Z,p(l.object)),W=d(L,j,H,Y),W&&y(L,j,H,Y)}else{let Z=O.wireframe===!0;(l.geometry!==j.id||l.program!==H.id||l.wireframe!==Z)&&(l.geometry=j.id,l.program=H.id,l.wireframe=Z,W=!0)}Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(W||u)&&(u=!1,P(L,O,H,j),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,O,H){let j=H.wireframe===!0,Y=a[L.id];Y===void 0&&(Y={},a[L.id]=Y);let W=Y[O.id];W===void 0&&(W={},Y[O.id]=W);let Z=W[j];return Z===void 0&&(Z=m(h()),W[j]=Z),Z}function m(L){let O=[],H=[],j=[];for(let Y=0;Y<i;Y++)O[Y]=0,H[Y]=0,j[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:j,object:L,attributes:{},index:null}}function d(L,O,H,j){let Y=l.attributes,W=O.attributes,Z=0,ee=H.getAttributes();for(let ue in ee)if(ee[ue].location>=0){let K=Y[ue],fe=W[ue];if(fe===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(fe=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(fe=L.instanceColor)),K===void 0||K.attribute!==fe||fe&&K.data!==fe.data)return!0;Z++}return l.attributesNum!==Z||l.index!==j}function y(L,O,H,j){let Y={},W=O.attributes,Z=0,ee=H.getAttributes();for(let ue in ee)if(ee[ue].location>=0){let K=W[ue];K===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));let fe={};fe.attribute=K,K&&K.data&&(fe.data=K.data),Y[ue]=fe,Z++}l.attributes=Y,l.attributesNum=Z,l.index=j}function x(){let L=l.newAttributes;for(let O=0,H=L.length;O<H;O++)L[O]=0}function v(L){S(L,0)}function S(L,O){let H=l.newAttributes,j=l.enabledAttributes,Y=l.attributeDivisors;H[L]=1,j[L]===0&&(s.enableVertexAttribArray(L),j[L]=1),Y[L]!==O&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,O),Y[L]=O)}function b(){let L=l.newAttributes,O=l.enabledAttributes;for(let H=0,j=O.length;H<j;H++)O[H]!==L[H]&&(s.disableVertexAttribArray(H),O[H]=0)}function T(L,O,H,j,Y,W,Z){Z===!0?s.vertexAttribIPointer(L,O,H,Y,W):s.vertexAttribPointer(L,O,H,j,Y,W)}function P(L,O,H,j){if(n.isWebGL2===!1&&(L.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let Y=j.attributes,W=H.getAttributes(),Z=O.defaultAttributeValues;for(let ee in W){let ue=W[ee];if(ue.location>=0){let q=Y[ee];if(q===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){let K=q.normalized,fe=q.itemSize,ve=t.get(q);if(ve===void 0)continue;let ge=ve.buffer,Re=ve.type,Ce=ve.bytesPerElement,Me=n.isWebGL2===!0&&(Re===s.INT||Re===s.UNSIGNED_INT||q.gpuType===qd);if(q.isInterleavedBufferAttribute){let qe=q.data,z=qe.stride,yt=q.offset;if(qe.isInstancedInterleavedBuffer){for(let Te=0;Te<ue.locationSize;Te++)S(ue.location+Te,qe.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=qe.meshPerAttribute*qe.count)}else for(let Te=0;Te<ue.locationSize;Te++)v(ue.location+Te);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Te=0;Te<ue.locationSize;Te++)T(ue.location+Te,fe/ue.locationSize,Re,K,z*Ce,(yt+fe/ue.locationSize*Te)*Ce,Me)}else{if(q.isInstancedBufferAttribute){for(let qe=0;qe<ue.locationSize;qe++)S(ue.location+qe,q.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let qe=0;qe<ue.locationSize;qe++)v(ue.location+qe);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let qe=0;qe<ue.locationSize;qe++)T(ue.location+qe,fe/ue.locationSize,Re,K,fe*Ce,fe/ue.locationSize*qe*Ce,Me)}}else if(Z!==void 0){let K=Z[ee];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(ue.location,K);break;case 3:s.vertexAttrib3fv(ue.location,K);break;case 4:s.vertexAttrib4fv(ue.location,K);break;default:s.vertexAttrib1fv(ue.location,K)}}}}b()}function M(){N();for(let L in a){let O=a[L];for(let H in O){let j=O[H];for(let Y in j)g(j[Y].object),delete j[Y];delete O[H]}delete a[L]}}function E(L){if(a[L.id]===void 0)return;let O=a[L.id];for(let H in O){let j=O[H];for(let Y in j)g(j[Y].object),delete j[Y];delete O[H]}delete a[L.id]}function D(L){for(let O in a){let H=a[O];if(H[L.id]===void 0)continue;let j=H[L.id];for(let Y in j)g(j[Y].object),delete j[Y];delete H[L.id]}}function N(){B(),u=!0,l!==c&&(l=c,p(l.object))}function B(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:N,resetDefaultState:B,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:v,disableUnusedAttributes:b}}function J_(s,e,t,n){let i=n.isWebGL2,r;function o(u){r=u}function a(u,f){s.drawArrays(r,u,f),t.update(f,r,1)}function c(u,f,h){if(h===0)return;let p,g;if(i)p=s,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,u,f,h),t.update(f,r,h)}function l(u,f,h){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{p.multiDrawArraysWEBGL(r,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Q_(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),h=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,v=o||e.has("OES_texture_float"),S=x&&v,b=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:S,maxSamples:b}}function ey(s){let e=this,t=null,n=0,i=!1,r=!1,o=new qt,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let p=f.length!==0||h||n!==0||i;return i=h,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=s.get(f);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{let y=r?0:n,x=y*4,v=d.clippingState||null;c.value=v,v=u(g,h,x,p);for(let S=0;S!==x;++S)v[S]=t[S];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let d=p+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,v=p;x!==_;++x,v+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ty(s){let e=new WeakMap;function t(o,a){return a===wl?o.mapping=Bs:a===Rl&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===wl||a===Rl)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Ul(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Wn=class extends ga{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ds=4,Qf=[.125,.215,.35,.446,.526,.582],ns=20,fl=new Wn,ed=new _e,dl=null,pl=0,ml=0,ts=(1+Math.sqrt(5))/2,Ls=1/ts,td=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,ts,Ls),new w(0,ts,-Ls),new w(Ls,0,ts),new w(-Ls,0,ts),new w(ts,Ls,0),new w(-ts,Ls,0)],Gs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){dl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dl,pl,ml),e.scissorTest=!1,jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:ri,format:fn,colorSpace:pt,depthBuffer:!1},i=nd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ny(r)),this._blurMaterial=iy(r,e,t)}return i}_compileMaterial(e){let t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,fl)}_sceneToCubeUV(e,t,n,i){let a=new Lt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(ed),u.toneMapping=Hn,u.autoClear=!1;let p=new Qt({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),g=new $e(new os,p),_=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(ed),_=!0);for(let d=0;d<6;d++){let y=d%3;y===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):y===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let x=this._cubeSize;jo(i,y*x,d>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Bs||e.mapping===zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=id());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new $e(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;jo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,fl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=td[(i-1)%td.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,f=new $e(this._lodPlanes[i],l),h=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ns-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);let d=[],y=0;for(let T=0;T<ns;++T){let P=T/_,M=Math.exp(-P*P/2);d.push(M),T===0?y+=M:T<m&&(y+=2*M)}for(let T=0;T<d.length;T++)d[T]=d[T]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;let v=this._sizeLods[i],S=3*v*(i>x-Ds?i-x+Ds:0),b=4*(this._cubeSize-v);jo(t,S,b,3*v,2*v),c.setRenderTarget(t),c.render(f,fl)}};function ny(s){let e=[],t=[],n=[],i=s,r=s-Ds+1+Qf.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Ds?c=Qf[o-s+Ds-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,d=1,y=new Float32Array(_*g*p),x=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let b=0;b<p;b++){let T=b%3*2/3-1,P=b>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];y.set(M,_*g*b),x.set(h,m*g*b);let E=[b,b,b,b,b,b];v.set(E,d*g*b)}let S=new Dt;S.setAttribute("position",new st(y,_)),S.setAttribute("uv",new st(x,m)),S.setAttribute("faceIndex",new st(v,d)),e.push(S),i>Ds&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nd(s,e,t){let n=new Yt(s,e,t);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function iy(s,e,t){let n=new Float32Array(ns),i=new w(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:It,depthTest:!1,depthWrite:!1})}function id(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:It,depthTest:!1,depthWrite:!1})}function sd(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:It,depthTest:!1,depthWrite:!1})}function Tu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sy(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===wl||c===Rl,u=c===Bs||c===zs;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Gs(s)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{let f=a.image;if(l&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Gs(s));let h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ry(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function oy(s,e,t,n){let i={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let _=h.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete i[h.id];let p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function c(f){let h=f.attributes;for(let g in h)e.update(h[g],s.ARRAY_BUFFER);let p=f.morphAttributes;for(let g in p){let _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(f){let h=[],p=f.index,g=f.attributes.position,_=0;if(p!==null){let y=p.array;_=p.version;for(let x=0,v=y.length;x<v;x+=3){let S=y[x+0],b=y[x+1],T=y[x+2];h.push(S,b,b,T,T,S)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){let S=x+0,b=x+1,T=x+2;h.push(S,b,b,T,T,S)}}else return;let m=new(np(h)?ma:pa)(h,1);m.version=_;let d=r.get(f);d&&e.remove(d),r.set(f,m)}function u(f){let h=r.get(f);if(h){let p=f.index;p!==null&&h.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function ay(s,e,t,n){let i=n.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function u(p,g){s.drawElements(r,g,a,p*c),t.update(g,r,1)}function f(p,g,_){if(_===0)return;let m,d;if(i)m=s,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,a,p*c,_),t.update(g,r,_)}function h(p,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/c,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,a,p,0,_);let d=0;for(let y=0;y<_;y++)d+=g[y];t.update(d,r,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function cy(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ly(s,e){return s[0]-e[0]}function uy(s,e){return Math.abs(e[1])-Math.abs(s[1])}function hy(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new lt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f){let h=l.morphTargetInfluences;if(e.isWebGL2===!0){let p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0,_=r.get(u);if(_===void 0||_.count!==g){let L=function(){N.dispose(),r.delete(u),u.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();let y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],T=u.morphAttributes.color||[],P=0;y===!0&&(P=1),x===!0&&(P=2),v===!0&&(P=3);let M=u.attributes.position.count*P,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let D=new Float32Array(M*E*4*g),N=new fa(D,M,E,g);N.type=vi,N.needsUpdate=!0;let B=P*4;for(let O=0;O<g;O++){let H=S[O],j=b[O],Y=T[O],W=M*E*4*O;for(let Z=0;Z<H.count;Z++){let ee=Z*B;y===!0&&(o.fromBufferAttribute(H,Z),D[W+ee+0]=o.x,D[W+ee+1]=o.y,D[W+ee+2]=o.z,D[W+ee+3]=0),x===!0&&(o.fromBufferAttribute(j,Z),D[W+ee+4]=o.x,D[W+ee+5]=o.y,D[W+ee+6]=o.z,D[W+ee+7]=0),v===!0&&(o.fromBufferAttribute(Y,Z),D[W+ee+8]=o.x,D[W+ee+9]=o.y,D[W+ee+10]=o.z,D[W+ee+11]=Y.itemSize===4?o.w:1)}}_={count:g,texture:N,size:new re(M,E)},r.set(u,_),u.addEventListener("dispose",L)}let m=0;for(let y=0;y<h.length;y++)m+=h[y];let d=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(s,"morphTargetBaseInfluence",d),f.getUniforms().setValue(s,"morphTargetInfluences",h),f.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let p=h===void 0?0:h.length,g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<p;x++){let v=g[x];v[0]=x,v[1]=h[x]}g.sort(uy);for(let x=0;x<8;x++)x<p&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(ly);let _=u.morphAttributes.position,m=u.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let v=a[x],S=v[0],b=v[1];S!==Number.MAX_SAFE_INTEGER&&b?(_&&u.getAttribute("morphTarget"+x)!==_[S]&&u.setAttribute("morphTarget"+x,_[S]),m&&u.getAttribute("morphNormal"+x)!==m[S]&&u.setAttribute("morphNormal"+x,m[S]),i[x]=b,d+=b):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}let y=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(s,"morphTargetBaseInfluence",y),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function fy(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,f=e.get(c,u);if(i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;i.get(h)!==l&&(h.update(),i.set(h,l))}return f}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Ws=class extends Jt{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:is,u!==is&&u!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===is&&(n=Di),n===void 0&&u===Oi&&(n=bi),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Mt,this.minFilter=c!==void 0?c:Mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},op=new Jt,ap=new Ws(1,1);ap.compareFunction=tp;var cp=new fa,lp=new Dl,up=new xa,rd=[],od=[],ad=new Float32Array(16),cd=new Float32Array(9),ld=new Float32Array(4);function Ks(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=rd[i];if(r===void 0&&(r=new Float32Array(i),rd[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Ut(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Ot(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Va(s,e){let t=od[e];t===void 0&&(t=new Int32Array(e),od[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function dy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function py(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2fv(this.addr,e),Ot(t,e)}}function my(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;s.uniform3fv(this.addr,e),Ot(t,e)}}function gy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4fv(this.addr,e),Ot(t,e)}}function xy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;ld.set(n),s.uniformMatrix2fv(this.addr,!1,ld),Ot(t,n)}}function _y(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;cd.set(n),s.uniformMatrix3fv(this.addr,!1,cd),Ot(t,n)}}function yy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ut(t,n))return;ad.set(n),s.uniformMatrix4fv(this.addr,!1,ad),Ot(t,n)}}function vy(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function My(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2iv(this.addr,e),Ot(t,e)}}function by(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3iv(this.addr,e),Ot(t,e)}}function Sy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4iv(this.addr,e),Ot(t,e)}}function Ty(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ey(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;s.uniform2uiv(this.addr,e),Ot(t,e)}}function Ay(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;s.uniform3uiv(this.addr,e),Ot(t,e)}}function wy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;s.uniform4uiv(this.addr,e),Ot(t,e)}}function Ry(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?ap:op;t.setTexture2D(e||r,i)}function Cy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||lp,i)}function Py(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||up,i)}function Ly(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cp,i)}function Iy(s){switch(s){case 5126:return dy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return xy;case 35675:return _y;case 35676:return yy;case 5124:case 35670:return vy;case 35667:case 35671:return My;case 35668:case 35672:return by;case 35669:case 35673:return Sy;case 5125:return Ty;case 36294:return Ey;case 36295:return Ay;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Py;case 36289:case 36303:case 36311:case 36292:return Ly}}function Dy(s,e){s.uniform1fv(this.addr,e)}function Ny(s,e){let t=Ks(e,this.size,2);s.uniform2fv(this.addr,t)}function Uy(s,e){let t=Ks(e,this.size,3);s.uniform3fv(this.addr,t)}function Oy(s,e){let t=Ks(e,this.size,4);s.uniform4fv(this.addr,t)}function Fy(s,e){let t=Ks(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function By(s,e){let t=Ks(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function zy(s,e){let t=Ks(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ky(s,e){s.uniform1iv(this.addr,e)}function Hy(s,e){s.uniform2iv(this.addr,e)}function Vy(s,e){s.uniform3iv(this.addr,e)}function Gy(s,e){s.uniform4iv(this.addr,e)}function Wy(s,e){s.uniform1uiv(this.addr,e)}function Xy(s,e){s.uniform2uiv(this.addr,e)}function qy(s,e){s.uniform3uiv(this.addr,e)}function Yy(s,e){s.uniform4uiv(this.addr,e)}function jy(s,e,t){let n=this.cache,i=e.length,r=Va(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||op,r[o])}function Zy(s,e,t){let n=this.cache,i=e.length,r=Va(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||lp,r[o])}function $y(s,e,t){let n=this.cache,i=e.length,r=Va(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||up,r[o])}function Ky(s,e,t){let n=this.cache,i=e.length,r=Va(t,i);Ut(n,r)||(s.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||cp,r[o])}function Jy(s){switch(s){case 5126:return Dy;case 35664:return Ny;case 35665:return Uy;case 35666:return Oy;case 35674:return Fy;case 35675:return By;case 35676:return zy;case 5124:case 35670:return ky;case 35667:case 35671:return Hy;case 35668:case 35672:return Vy;case 35669:case 35673:return Gy;case 5125:return Wy;case 36294:return Xy;case 36295:return qy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return jy;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return $y;case 36289:case 36303:case 36311:case 36292:return Ky}}var Fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Iy(t.type)}},Bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jy(t.type)}},zl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},gl=/(\w+)(\])?(\[|\.)?/g;function ud(s,e){s.seq.push(e),s.map[e.id]=e}function Qy(s,e,t){let n=s.name,i=n.length;for(gl.lastIndex=0;;){let r=gl.exec(n),o=gl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){ud(t,l===void 0?new Fl(a,s,e):new Bl(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new zl(a),ud(t,f)),t=f}}}var Fs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Qy(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function hd(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var ev=37297,tv=0;function nv(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function iv(s){let e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(s),n;switch(e===t?n="":e===aa&&t===oa?n="LinearDisplayP3ToLinearSRGB":e===oa&&t===aa&&(n="LinearSRGBToLinearDisplayP3"),s){case pt:case Ha:return[n,"LinearTransferOETF"];case at:case bu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function fd(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+nv(s.getShaderSource(e),o)}else return i}function sv(s,e){let t=iv(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function rv(s,e){let t;switch(e){case mu:t="Linear";break;case gu:t="Reinhard";break;case xu:t="OptimizedCineon";break;case $r:t="ACESFilmic";break;case _u:t="AgX";break;case mg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ov(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function av(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ns).join(`
`)}function cv(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lv(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ns(s){return s!==""}function dd(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(s){return s.replace(uv,fv)}var hv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function fv(s,e){let t=Ge[e];if(t===void 0){let n=hv.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kl(t)}var dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(s){return s.replace(dv,pv)}function pv(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gd(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mv(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ym?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function gv(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bs:case zs:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xv(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===zs&&(e="ENVMAP_MODE_REFRACTION"),e}function _v(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wd:e="ENVMAP_BLENDING_MULTIPLY";break;case dg:e="ENVMAP_BLENDING_MIX";break;case pg:e="ENVMAP_BLENDING_ADD";break}return e}function yv(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vv(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=mv(t),l=gv(t),u=xv(t),f=_v(t),h=yv(t),p=t.isWebGL2?"":ov(t),g=av(t),_=cv(r),m=i.createProgram(),d,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ns).join(`
`),d.length>0&&(d+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ns).join(`
`),y.length>0&&(y+=`
`)):(d=[gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),y=[p,gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Hn?rv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,sv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),o=kl(o),o=dd(o,t),o=pd(o,t),a=kl(a),a=dd(a,t),a=pd(a,t),o=md(o),a=md(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Uf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let v=x+d+o,S=x+y+a,b=hd(i,i.VERTEX_SHADER,v),T=hd(i,i.FRAGMENT_SHADER,S);i.attachShader(m,b),i.attachShader(m,T),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function P(N){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(b).trim(),O=i.getShaderInfoLog(T).trim(),H=!0,j=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,b,T);else{let Y=fd(i,b,"vertex"),W=fd(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+B+`
`+Y+`
`+W)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(L===""||O==="")&&(j=!1);j&&(N.diagnostics={runnable:H,programLog:B,vertexShader:{log:L,prefix:d},fragmentShader:{log:O,prefix:y}})}i.deleteShader(b),i.deleteShader(T),M=new Fs(i,m),E=lv(i,m)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(m,ev)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tv++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=T,this}var Mv=0,Hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Vl(e),t.set(e,n)),n}},Vl=class{constructor(e){this.id=Mv++,this.code=e,this.usedTimes=0}};function bv(s,e,t,n,i,r,o){let a=new zr,c=new Hl,l=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,E,D,N,B){let L=N.fog,O=B.geometry,H=M.isMeshStandardMaterial?N.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),Y=j&&j.mapping===za?j.image.height:null,W=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let Z=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ee=Z!==void 0?Z.length:0,ue=0;O.morphAttributes.position!==void 0&&(ue=1),O.morphAttributes.normal!==void 0&&(ue=2),O.morphAttributes.color!==void 0&&(ue=3);let q,K,fe,ve;if(W){let sn=ni[W];q=sn.vertexShader,K=sn.fragmentShader}else q=M.vertexShader,K=M.fragmentShader,c.update(M),fe=c.getVertexShaderID(M),ve=c.getFragmentShaderID(M);let ge=s.getRenderTarget(),Re=B.isInstancedMesh===!0,Ce=B.isBatchedMesh===!0,Me=!!M.map,qe=!!M.matcap,z=!!j,yt=!!M.aoMap,Te=!!M.lightMap,Le=!!M.bumpMap,xe=!!M.normalMap,rt=!!M.displacementMap,Ue=!!M.emissiveMap,C=!!M.metalnessMap,A=!!M.roughnessMap,k=M.anisotropy>0,ne=M.clearcoat>0,Q=M.iridescence>0,te=M.sheen>0,ye=M.transmission>0,he=k&&!!M.anisotropyMap,pe=ne&&!!M.clearcoatMap,Ee=ne&&!!M.clearcoatNormalMap,Ne=ne&&!!M.clearcoatRoughnessMap,$=Q&&!!M.iridescenceMap,ke=Q&&!!M.iridescenceThicknessMap,I=te&&!!M.sheenColorMap,J=te&&!!M.sheenRoughnessMap,ce=!!M.specularMap,ie=!!M.specularColorMap,be=!!M.specularIntensityMap,Be=ye&&!!M.transmissionMap,He=ye&&!!M.thicknessMap,Oe=!!M.gradientMap,se=!!M.alphaMap,U=M.alphaTest>0,oe=!!M.alphaHash,ae=!!M.extensions,Pe=!!O.attributes.uv1,Ae=!!O.attributes.uv2,tt=!!O.attributes.uv3,it=Hn;return M.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(it=s.toneMapping),{isWebGL2:u,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:K,defines:M.defines,customVertexShaderID:fe,customFragmentShaderID:ve,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ce,instancing:Re,instancingColor:Re&&B.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:pt,map:Me,matcap:qe,envMap:z,envMapMode:z&&j.mapping,envMapCubeUVHeight:Y,aoMap:yt,lightMap:Te,bumpMap:Le,normalMap:xe,displacementMap:h&&rt,emissiveMap:Ue,normalMapObjectSpace:xe&&M.normalMapType===Rg,normalMapTangentSpace:xe&&M.normalMapType===Mu,metalnessMap:C,roughnessMap:A,anisotropy:k,anisotropyMap:he,clearcoat:ne,clearcoatMap:pe,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ne,iridescence:Q,iridescenceMap:$,iridescenceThicknessMap:ke,sheen:te,sheenColorMap:I,sheenRoughnessMap:J,specularMap:ce,specularColorMap:ie,specularIntensityMap:be,transmission:ye,transmissionMap:Be,thicknessMap:He,gradientMap:Oe,opaque:M.transparent===!1&&M.blending===Us,alphaMap:se,alphaTest:U,alphaHash:oe,combine:M.combine,mapUv:Me&&_(M.map.channel),aoMapUv:yt&&_(M.aoMap.channel),lightMapUv:Te&&_(M.lightMap.channel),bumpMapUv:Le&&_(M.bumpMap.channel),normalMapUv:xe&&_(M.normalMap.channel),displacementMapUv:rt&&_(M.displacementMap.channel),emissiveMapUv:Ue&&_(M.emissiveMap.channel),metalnessMapUv:C&&_(M.metalnessMap.channel),roughnessMapUv:A&&_(M.roughnessMap.channel),anisotropyMapUv:he&&_(M.anisotropyMap.channel),clearcoatMapUv:pe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:I&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:J&&_(M.sheenRoughnessMap.channel),specularMapUv:ce&&_(M.specularMap.channel),specularColorMapUv:ie&&_(M.specularColorMap.channel),specularIntensityMapUv:be&&_(M.specularIntensityMap.channel),transmissionMapUv:Be&&_(M.transmissionMap.channel),thicknessMapUv:He&&_(M.thicknessMap.channel),alphaMapUv:se&&_(M.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(xe||k),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:Pe,vertexUv2s:Ae,vertexUv3s:tt,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(Me||se),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ue,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Me&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gt,flipSided:M.side===Gt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ae&&M.extensions.derivatives===!0,extensionFragDepth:ae&&M.extensions.fragDepth===!0,extensionDrawBuffers:ae&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ae&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)E.push(D),E.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(y(E,M),x(E,M),E.push(s.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function y(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function x(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function v(M){let E=g[M.type],D;if(E){let N=ni[E];D=Yn.clone(N.uniforms)}else D=M.uniforms;return D}function S(M,E){let D;for(let N=0,B=l.length;N<B;N++){let L=l[N];if(L.cacheKey===E){D=L,++D.usedTimes;break}}return D===void 0&&(D=new vv(s,E,M,r),l.push(D)),D}function b(M){if(--M.usedTimes===0){let E=l.indexOf(M);l[E]=l[l.length-1],l.pop(),M.destroy()}}function T(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:S,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:P}}function Sv(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Tv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function xd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _d(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,p,g,_,m){let d=s[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},s[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,h,p,g,_,m){let d=o(f,h,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function c(f,h,p,g,_,m){let d=o(f,h,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function l(f,h){t.length>1&&t.sort(f||Tv),n.length>1&&n.sort(h||xd),i.length>1&&i.sort(h||xd)}function u(){for(let f=e,h=s.length;f<h;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function Ev(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new _d,s.set(n,[o])):i>=r.length?(o=new _d,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Av(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new _e};break;case"SpotLight":t={position:new w,direction:new w,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new _e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":t={color:new _e,position:new w,halfWidth:new w,halfHeight:new w};break}return s[e.id]=t,t}}}function wv(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var Rv=0;function Cv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Pv(s,e){let t=new Av,n=wv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new w);let r=new w,o=new Se,a=new Se;function c(u,f){let h=0,p=0,g=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let _=0,m=0,d=0,y=0,x=0,v=0,S=0,b=0,T=0,P=0,M=0;u.sort(Cv);let E=f===!0?Math.PI:1;for(let N=0,B=u.length;N<B;N++){let L=u[N],O=L.color,H=L.intensity,j=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=O.r*H*E,p+=O.g*H*E,g+=O.b*H*E;else if(L.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(L.sh.coefficients[W],H);M++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*E),L.castShadow){let Z=L.shadow,ee=n.get(L);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,i.directionalShadow[_]=ee,i.directionalShadowMap[_]=Y,i.directionalShadowMatrix[_]=L.shadow.matrix,v++}i.directional[_]=W,_++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(O).multiplyScalar(H*E),W.distance=j,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,i.spot[d]=W;let Z=L.shadow;if(L.map&&(i.spotLightMap[T]=L.map,T++,Z.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[d]=Z.matrix,L.castShadow){let ee=n.get(L);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,i.spotShadow[d]=ee,i.spotShadowMap[d]=Y,b++}d++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(O).multiplyScalar(H),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=W,y++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity*E),W.distance=L.distance,W.decay=L.decay,L.castShadow){let Z=L.shadow,ee=n.get(L);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=Y,i.pointShadowMatrix[m]=L.shadow.matrix,S++}i.point[m]=W,m++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(H*E),W.groundColor.copy(L.groundColor).multiplyScalar(H*E),i.hemi[x]=W,x++}}y>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;let D=i.hash;(D.directionalLength!==_||D.pointLength!==m||D.spotLength!==d||D.rectAreaLength!==y||D.hemiLength!==x||D.numDirectionalShadows!==v||D.numPointShadows!==S||D.numSpotShadows!==b||D.numSpotMaps!==T||D.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=y,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=b+T-P,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=M,D.directionalLength=_,D.pointLength=m,D.spotLength=d,D.rectAreaLength=y,D.hemiLength=x,D.numDirectionalShadows=v,D.numPointShadows=S,D.numSpotShadows=b,D.numSpotMaps=T,D.numLightProbes=M,i.version=Rv++)}function l(u,f){let h=0,p=0,g=0,_=0,m=0,d=f.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){let v=u[y];if(v.isDirectionalLight){let S=i.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),h++}else if(v.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(d),g++}else if(v.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),a.identity(),o.copy(v.matrixWorld),o.premultiply(d),a.extractRotation(o),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let S=i.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(d),p++}else if(v.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:c,setupView:l,state:i}}function yd(s,e){let t=new Pv(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Lv(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new yd(s,e),t.set(r,[c])):o>=a.length?(c=new yd(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var Gl=class extends pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ag,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wl=class extends pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Nv(s,e,t){let n=new kr,i=new re,r=new re,o=new lt,a=new Gl({depthPacking:wg}),c=new Wl,l={},u=t.maxTextureSize,f={[bn]:Gt,[Gt]:bn,[gt]:gt},h=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Iv,fragmentShader:Dv}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let g=new Dt;g.setAttribute("position",new st(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new $e(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gd;let d=this.type;this.render=function(b,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let M=s.getRenderTarget(),E=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),N=s.state;N.setBlending(It),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=d!==yi&&this.type===yi,L=d===yi&&this.type!==yi;for(let O=0,H=b.length;O<H;O++){let j=b[O],Y=j.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let W=Y.getFrameExtents();if(i.multiply(W),r.copy(Y.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/W.x),i.x=r.x*W.x,Y.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/W.y),i.y=r.y*W.y,Y.mapSize.y=r.y)),Y.map===null||B===!0||L===!0){let ee=this.type!==yi?{minFilter:Mt,magFilter:Mt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Yt(i.x,i.y,ee),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();let Z=Y.getViewportCount();for(let ee=0;ee<Z;ee++){let ue=Y.getViewport(ee);o.set(r.x*ue.x,r.y*ue.y,r.x*ue.z,r.y*ue.w),N.viewport(o),Y.updateMatrices(j,ee),n=Y.getFrustum(),v(T,P,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===yi&&y(Y,P),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(M,E,D)};function y(b,T){let P=e.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Yt(i.x,i.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(T,null,P,h,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(T,null,P,p,_,null)}function x(b,T,P,M){let E=null,D=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)E=D;else if(E=P.isPointLight===!0?c:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let N=E.uuid,B=T.uuid,L=l[N];L===void 0&&(L={},l[N]=L);let O=L[B];O===void 0&&(O=E.clone(),L[B]=O,T.addEventListener("dispose",S)),E=O}if(E.visible=T.visible,E.wireframe=T.wireframe,M===yi?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:f[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let N=s.properties.get(E);N.light=P}return E}function v(b,T,P,M,E){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===yi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);let B=e.update(b),L=b.material;if(Array.isArray(L)){let O=B.groups;for(let H=0,j=O.length;H<j;H++){let Y=O[H],W=L[Y.materialIndex];if(W&&W.visible){let Z=x(b,W,M,E);b.onBeforeShadow(s,b,T,P,B,Z,Y),s.renderBufferDirect(P,null,B,Z,b,Y),b.onAfterShadow(s,b,T,P,B,Z,Y)}}}else if(L.visible){let O=x(b,L,M,E);b.onBeforeShadow(s,b,T,P,B,O,null),s.renderBufferDirect(P,null,B,O,b,null),b.onAfterShadow(s,b,T,P,B,O,null)}}let N=b.children;for(let B=0,L=N.length;B<L;B++)v(N[B],T,P,M,E)}function S(b){b.target.removeEventListener("dispose",S);for(let P in l){let M=l[P],E=b.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function Uv(s,e,t){let n=t.isWebGL2;function i(){let U=!1,oe=new lt,ae=null,Pe=new lt(0,0,0,0);return{setMask:function(Ae){ae!==Ae&&!U&&(s.colorMask(Ae,Ae,Ae,Ae),ae=Ae)},setLocked:function(Ae){U=Ae},setClear:function(Ae,tt,it,kt,sn){sn===!0&&(Ae*=kt,tt*=kt,it*=kt),oe.set(Ae,tt,it,kt),Pe.equals(oe)===!1&&(s.clearColor(Ae,tt,it,kt),Pe.copy(oe))},reset:function(){U=!1,ae=null,Pe.set(-1,0,0,0)}}}function r(){let U=!1,oe=null,ae=null,Pe=null;return{setTest:function(Ae){Ae?Ce(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(Ae){oe!==Ae&&!U&&(s.depthMask(Ae),oe=Ae)},setFunc:function(Ae){if(ae!==Ae){switch(Ae){case og:s.depthFunc(s.NEVER);break;case ag:s.depthFunc(s.ALWAYS);break;case cg:s.depthFunc(s.LESS);break;case ia:s.depthFunc(s.LEQUAL);break;case lg:s.depthFunc(s.EQUAL);break;case ug:s.depthFunc(s.GEQUAL);break;case hg:s.depthFunc(s.GREATER);break;case fg:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ae=Ae}},setLocked:function(Ae){U=Ae},setClear:function(Ae){Pe!==Ae&&(s.clearDepth(Ae),Pe=Ae)},reset:function(){U=!1,oe=null,ae=null,Pe=null}}}function o(){let U=!1,oe=null,ae=null,Pe=null,Ae=null,tt=null,it=null,kt=null,sn=null;return{setTest:function(ft){U||(ft?Ce(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(ft){oe!==ft&&!U&&(s.stencilMask(ft),oe=ft)},setFunc:function(ft,rn,ti){(ae!==ft||Pe!==rn||Ae!==ti)&&(s.stencilFunc(ft,rn,ti),ae=ft,Pe=rn,Ae=ti)},setOp:function(ft,rn,ti){(tt!==ft||it!==rn||kt!==ti)&&(s.stencilOp(ft,rn,ti),tt=ft,it=rn,kt=ti)},setLocked:function(ft){U=ft},setClear:function(ft){sn!==ft&&(s.clearStencil(ft),sn=ft)},reset:function(){U=!1,oe=null,ae=null,Pe=null,Ae=null,tt=null,it=null,kt=null,sn=null}}}let a=new i,c=new r,l=new o,u=new WeakMap,f=new WeakMap,h={},p={},g=new WeakMap,_=[],m=null,d=!1,y=null,x=null,v=null,S=null,b=null,T=null,P=null,M=new _e(0,0,0),E=0,D=!1,N=null,B=null,L=null,O=null,H=null,j=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,W=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=W>=2);let ee=null,ue={},q=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),fe=new lt().fromArray(q),ve=new lt().fromArray(K);function ge(U,oe,ae,Pe){let Ae=new Uint8Array(4),tt=s.createTexture();s.bindTexture(U,tt),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let it=0;it<ae;it++)n&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(oe,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(oe+it,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return tt}let Re={};Re[s.TEXTURE_2D]=ge(s.TEXTURE_2D,s.TEXTURE_2D,1),Re[s.TEXTURE_CUBE_MAP]=ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[s.TEXTURE_2D_ARRAY]=ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Re[s.TEXTURE_3D]=ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ce(s.DEPTH_TEST),c.setFunc(ia),Ue(!1),C(Jh),Ce(s.CULL_FACE),xe(It);function Ce(U){h[U]!==!0&&(s.enable(U),h[U]=!0)}function Me(U){h[U]!==!1&&(s.disable(U),h[U]=!1)}function qe(U,oe){return p[U]!==oe?(s.bindFramebuffer(U,oe),p[U]=oe,n&&(U===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=oe),U===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=oe)),!0):!1}function z(U,oe){let ae=_,Pe=!1;if(U)if(ae=g.get(oe),ae===void 0&&(ae=[],g.set(oe,ae)),U.isWebGLMultipleRenderTargets){let Ae=U.texture;if(ae.length!==Ae.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,it=Ae.length;tt<it;tt++)ae[tt]=s.COLOR_ATTACHMENT0+tt;ae.length=Ae.length,Pe=!0}}else ae[0]!==s.COLOR_ATTACHMENT0&&(ae[0]=s.COLOR_ATTACHMENT0,Pe=!0);else ae[0]!==s.BACK&&(ae[0]=s.BACK,Pe=!0);Pe&&(t.isWebGL2?s.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function yt(U){return m!==U?(s.useProgram(U),m=U,!0):!1}let Te={[Cn]:s.FUNC_ADD,[jm]:s.FUNC_SUBTRACT,[Zm]:s.FUNC_REVERSE_SUBTRACT};if(n)Te[nf]=s.MIN,Te[sf]=s.MAX;else{let U=e.get("EXT_blend_minmax");U!==null&&(Te[nf]=U.MIN_EXT,Te[sf]=U.MAX_EXT)}let Le={[Zs]:s.ZERO,[$m]:s.ONE,[Km]:s.SRC_COLOR,[El]:s.SRC_ALPHA,[tg]:s.SRC_ALPHA_SATURATE,[Ba]:s.DST_COLOR,[Fa]:s.DST_ALPHA,[Jm]:s.ONE_MINUS_SRC_COLOR,[Al]:s.ONE_MINUS_SRC_ALPHA,[eg]:s.ONE_MINUS_DST_COLOR,[Qm]:s.ONE_MINUS_DST_ALPHA,[ng]:s.CONSTANT_COLOR,[ig]:s.ONE_MINUS_CONSTANT_COLOR,[sg]:s.CONSTANT_ALPHA,[rg]:s.ONE_MINUS_CONSTANT_ALPHA};function xe(U,oe,ae,Pe,Ae,tt,it,kt,sn,ft){if(U===It){d===!0&&(Me(s.BLEND),d=!1);return}if(d===!1&&(Ce(s.BLEND),d=!0),U!==pu){if(U!==y||ft!==D){if((x!==Cn||b!==Cn)&&(s.blendEquation(s.FUNC_ADD),x=Cn,b=Cn),ft)switch(U){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qh:s.blendFunc(s.ONE,s.ONE);break;case ef:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qh:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ef:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case tf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,S=null,T=null,P=null,M.set(0,0,0),E=0,y=U,D=ft}return}Ae=Ae||oe,tt=tt||ae,it=it||Pe,(oe!==x||Ae!==b)&&(s.blendEquationSeparate(Te[oe],Te[Ae]),x=oe,b=Ae),(ae!==v||Pe!==S||tt!==T||it!==P)&&(s.blendFuncSeparate(Le[ae],Le[Pe],Le[tt],Le[it]),v=ae,S=Pe,T=tt,P=it),(kt.equals(M)===!1||sn!==E)&&(s.blendColor(kt.r,kt.g,kt.b,sn),M.copy(kt),E=sn),y=U,D=!1}function rt(U,oe){U.side===gt?Me(s.CULL_FACE):Ce(s.CULL_FACE);let ae=U.side===Gt;oe&&(ae=!ae),Ue(ae),U.blending===Us&&U.transparent===!1?xe(It):xe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),a.setMask(U.colorWrite);let Pe=U.stencilWrite;l.setTest(Pe),Pe&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),k(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ce(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(U){N!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),N=U)}function C(U){U!==Xm?(Ce(s.CULL_FACE),U!==B&&(U===Jh?s.cullFace(s.BACK):U===qm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),B=U}function A(U){U!==L&&(Y&&s.lineWidth(U),L=U)}function k(U,oe,ae){U?(Ce(s.POLYGON_OFFSET_FILL),(O!==oe||H!==ae)&&(s.polygonOffset(oe,ae),O=oe,H=ae)):Me(s.POLYGON_OFFSET_FILL)}function ne(U){U?Ce(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function Q(U){U===void 0&&(U=s.TEXTURE0+j-1),ee!==U&&(s.activeTexture(U),ee=U)}function te(U,oe,ae){ae===void 0&&(ee===null?ae=s.TEXTURE0+j-1:ae=ee);let Pe=ue[ae];Pe===void 0&&(Pe={type:void 0,texture:void 0},ue[ae]=Pe),(Pe.type!==U||Pe.texture!==oe)&&(ee!==ae&&(s.activeTexture(ae),ee=ae),s.bindTexture(U,oe||Re[U]),Pe.type=U,Pe.texture=oe)}function ye(){let U=ue[ee];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function he(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ke(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(U){fe.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),fe.copy(U))}function Be(U){ve.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),ve.copy(U))}function He(U,oe){let ae=f.get(oe);ae===void 0&&(ae=new WeakMap,f.set(oe,ae));let Pe=ae.get(U);Pe===void 0&&(Pe=s.getUniformBlockIndex(oe,U.name),ae.set(U,Pe))}function Oe(U,oe){let Pe=f.get(oe).get(U);u.get(oe)!==Pe&&(s.uniformBlockBinding(oe,Pe,U.__bindingPointIndex),u.set(oe,Pe))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ee=null,ue={},p={},g=new WeakMap,_=[],m=null,d=!1,y=null,x=null,v=null,S=null,b=null,T=null,P=null,M=new _e(0,0,0),E=0,D=!1,N=null,B=null,L=null,O=null,H=null,fe.set(0,0,s.canvas.width,s.canvas.height),ve.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ce,disable:Me,bindFramebuffer:qe,drawBuffers:z,useProgram:yt,setBlending:xe,setMaterial:rt,setFlipSided:Ue,setCullFace:C,setLineWidth:A,setPolygonOffset:k,setScissorTest:ne,activeTexture:Q,bindTexture:te,unbindTexture:ye,compressedTexImage2D:he,compressedTexImage3D:pe,texImage2D:ce,texImage3D:ie,updateUBOMapping:He,uniformBlockBinding:Oe,texStorage2D:I,texStorage3D:J,texSubImage2D:Ee,texSubImage3D:Ne,compressedTexSubImage2D:$,compressedTexSubImage3D:ke,scissor:be,viewport:Be,reset:se}}function Ov(s,e,t,n,i,r,o){let a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,f,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,A){return p?new OffscreenCanvas(C,A):Br("canvas")}function _(C,A,k,ne){let Q=1;if((C.width>ne||C.height>ne)&&(Q=ne/Math.max(C.width,C.height)),Q<1||A===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let te=A?la:Math.floor,ye=te(Q*C.width),he=te(Q*C.height);f===void 0&&(f=g(ye,he));let pe=k?g(ye,he):f;return pe.width=ye,pe.height=he,pe.getContext("2d").drawImage(C,0,0,ye,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+ye+"x"+he+")."),pe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return Ll(C.width)&&Ll(C.height)}function d(C){return a?!1:C.wrapS!==vn||C.wrapT!==vn||C.minFilter!==Mt&&C.minFilter!==cn}function y(C,A){return C.generateMipmaps&&A&&C.minFilter!==Mt&&C.minFilter!==cn}function x(C){s.generateMipmap(C)}function v(C,A,k,ne,Q=!1){if(a===!1)return A;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let te=A;if(A===s.RED&&(k===s.FLOAT&&(te=s.R32F),k===s.HALF_FLOAT&&(te=s.R16F),k===s.UNSIGNED_BYTE&&(te=s.R8)),A===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(te=s.R8UI),k===s.UNSIGNED_SHORT&&(te=s.R16UI),k===s.UNSIGNED_INT&&(te=s.R32UI),k===s.BYTE&&(te=s.R8I),k===s.SHORT&&(te=s.R16I),k===s.INT&&(te=s.R32I)),A===s.RG&&(k===s.FLOAT&&(te=s.RG32F),k===s.HALF_FLOAT&&(te=s.RG16F),k===s.UNSIGNED_BYTE&&(te=s.RG8)),A===s.RGBA){let ye=Q?ra:Ke.getTransfer(ne);k===s.FLOAT&&(te=s.RGBA32F),k===s.HALF_FLOAT&&(te=s.RGBA16F),k===s.UNSIGNED_BYTE&&(te=ye===ct?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(te=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(te=s.RGB5_A1)}return(te===s.R16F||te===s.R32F||te===s.RG16F||te===s.RG32F||te===s.RGBA16F||te===s.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function S(C,A,k){return y(C,k)===!0||C.isFramebufferTexture&&C.minFilter!==Mt&&C.minFilter!==cn?Math.log2(Math.max(A.width,A.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?A.mipmaps.length:1}function b(C){return C===Mt||C===sa||C===Pr?s.NEAREST:s.LINEAR}function T(C){let A=C.target;A.removeEventListener("dispose",T),M(A),A.isVideoTexture&&u.delete(A)}function P(C){let A=C.target;A.removeEventListener("dispose",P),D(A)}function M(C){let A=n.get(C);if(A.__webglInit===void 0)return;let k=C.source,ne=h.get(k);if(ne){let Q=ne[A.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(C),Object.keys(ne).length===0&&h.delete(k)}n.remove(C)}function E(C){let A=n.get(C);s.deleteTexture(A.__webglTexture);let k=C.source,ne=h.get(k);delete ne[A.__cacheKey],o.memory.textures--}function D(C){let A=C.texture,k=n.get(C),ne=n.get(A);if(ne.__webglTexture!==void 0&&(s.deleteTexture(ne.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(k.__webglFramebuffer[Q]))for(let te=0;te<k.__webglFramebuffer[Q].length;te++)s.deleteFramebuffer(k.__webglFramebuffer[Q][te]);else s.deleteFramebuffer(k.__webglFramebuffer[Q]);k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer[Q])}else{if(Array.isArray(k.__webglFramebuffer))for(let Q=0;Q<k.__webglFramebuffer.length;Q++)s.deleteFramebuffer(k.__webglFramebuffer[Q]);else s.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&s.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&s.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let Q=0;Q<k.__webglColorRenderbuffer.length;Q++)k.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(k.__webglColorRenderbuffer[Q]);k.__webglDepthRenderbuffer&&s.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Q=0,te=A.length;Q<te;Q++){let ye=n.get(A[Q]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(A[Q])}n.remove(A),n.remove(C)}let N=0;function B(){N=0}function L(){let C=N;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),N+=1,C}function O(C){let A=[];return A.push(C.wrapS),A.push(C.wrapT),A.push(C.wrapR||0),A.push(C.magFilter),A.push(C.minFilter),A.push(C.anisotropy),A.push(C.internalFormat),A.push(C.format),A.push(C.type),A.push(C.generateMipmaps),A.push(C.premultiplyAlpha),A.push(C.flipY),A.push(C.unpackAlignment),A.push(C.colorSpace),A.join()}function H(C,A){let k=n.get(C);if(C.isVideoTexture&&rt(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){let ne=C.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(k,C,A);return}}t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+A)}function j(C,A){let k=n.get(C);if(C.version>0&&k.__version!==C.version){fe(k,C,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+A)}function Y(C,A){let k=n.get(C);if(C.version>0&&k.__version!==C.version){fe(k,C,A);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+A)}function W(C,A){let k=n.get(C);if(C.version>0&&k.__version!==C.version){ve(k,C,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+A)}let Z={[Sn]:s.REPEAT,[vn]:s.CLAMP_TO_EDGE,[Fr]:s.MIRRORED_REPEAT},ee={[Mt]:s.NEAREST,[sa]:s.NEAREST_MIPMAP_NEAREST,[Pr]:s.NEAREST_MIPMAP_LINEAR,[cn]:s.LINEAR,[yu]:s.LINEAR_MIPMAP_NEAREST,[Ui]:s.LINEAR_MIPMAP_LINEAR},ue={[Cg]:s.NEVER,[Ug]:s.ALWAYS,[Pg]:s.LESS,[tp]:s.LEQUAL,[Lg]:s.EQUAL,[Ng]:s.GEQUAL,[Ig]:s.GREATER,[Dg]:s.NOTEQUAL};function q(C,A,k){if(k?(s.texParameteri(C,s.TEXTURE_WRAP_S,Z[A.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Z[A.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Z[A.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ee[A.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ee[A.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(A.wrapS!==vn||A.wrapT!==vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,b(A.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,b(A.minFilter)),A.minFilter!==Mt&&A.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ue[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ne=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Mt||A.minFilter!==Pr&&A.minFilter!==Ui||A.type===vi&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===ri&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(s.texParameterf(C,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function K(C,A){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,A.addEventListener("dispose",T));let ne=A.source,Q=h.get(ne);Q===void 0&&(Q={},h.set(ne,Q));let te=O(A);if(te!==C.__cacheKey){Q[te]===void 0&&(Q[te]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[te].usedTimes++;let ye=Q[C.__cacheKey];ye!==void 0&&(Q[C.__cacheKey].usedTimes--,ye.usedTimes===0&&E(A)),C.__cacheKey=te,C.__webglTexture=Q[te].texture}return k}function fe(C,A,k){let ne=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ne=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ne=s.TEXTURE_3D);let Q=K(C,A),te=A.source;t.bindTexture(ne,C.__webglTexture,s.TEXTURE0+k);let ye=n.get(te);if(te.version!==ye.__version||Q===!0){t.activeTexture(s.TEXTURE0+k);let he=Ke.getPrimaries(Ke.workingColorSpace),pe=A.colorSpace===Pn?null:Ke.getPrimaries(A.colorSpace),Ee=A.colorSpace===Pn||he===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Ne=d(A)&&m(A.image)===!1,$=_(A.image,Ne,!1,i.maxTextureSize);$=Ue(A,$);let ke=m($)||a,I=r.convert(A.format,A.colorSpace),J=r.convert(A.type),ce=v(A.internalFormat,I,J,A.colorSpace,A.isVideoTexture);q(ne,A,ke);let ie,be=A.mipmaps,Be=a&&A.isVideoTexture!==!0&&ce!==Jd,He=ye.__version===void 0||Q===!0,Oe=S(A,$,ke);if(A.isDepthTexture)ce=s.DEPTH_COMPONENT,a?A.type===vi?ce=s.DEPTH_COMPONENT32F:A.type===Di?ce=s.DEPTH_COMPONENT24:A.type===bi?ce=s.DEPTH24_STENCIL8:ce=s.DEPTH_COMPONENT16:A.type===vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===is&&ce===s.DEPTH_COMPONENT&&A.type!==vu&&A.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Di,J=r.convert(A.type)),A.format===Oi&&ce===s.DEPTH_COMPONENT&&(ce=s.DEPTH_STENCIL,A.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=bi,J=r.convert(A.type))),He&&(Be?t.texStorage2D(s.TEXTURE_2D,1,ce,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,ce,$.width,$.height,0,I,J,null));else if(A.isDataTexture)if(be.length>0&&ke){Be&&He&&t.texStorage2D(s.TEXTURE_2D,Oe,ce,be[0].width,be[0].height);for(let se=0,U=be.length;se<U;se++)ie=be[se],Be?t.texSubImage2D(s.TEXTURE_2D,se,0,0,ie.width,ie.height,I,J,ie.data):t.texImage2D(s.TEXTURE_2D,se,ce,ie.width,ie.height,0,I,J,ie.data);A.generateMipmaps=!1}else Be?(He&&t.texStorage2D(s.TEXTURE_2D,Oe,ce,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,$.width,$.height,I,J,$.data)):t.texImage2D(s.TEXTURE_2D,0,ce,$.width,$.height,0,I,J,$.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Be&&He&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,ce,be[0].width,be[0].height,$.depth);for(let se=0,U=be.length;se<U;se++)ie=be[se],A.format!==fn?I!==null?Be?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ie.width,ie.height,$.depth,I,ie.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,se,ce,ie.width,ie.height,$.depth,0,ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(s.TEXTURE_2D_ARRAY,se,0,0,0,ie.width,ie.height,$.depth,I,J,ie.data):t.texImage3D(s.TEXTURE_2D_ARRAY,se,ce,ie.width,ie.height,$.depth,0,I,J,ie.data)}else{Be&&He&&t.texStorage2D(s.TEXTURE_2D,Oe,ce,be[0].width,be[0].height);for(let se=0,U=be.length;se<U;se++)ie=be[se],A.format!==fn?I!==null?Be?t.compressedTexSubImage2D(s.TEXTURE_2D,se,0,0,ie.width,ie.height,I,ie.data):t.compressedTexImage2D(s.TEXTURE_2D,se,ce,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(s.TEXTURE_2D,se,0,0,ie.width,ie.height,I,J,ie.data):t.texImage2D(s.TEXTURE_2D,se,ce,ie.width,ie.height,0,I,J,ie.data)}else if(A.isDataArrayTexture)Be?(He&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,ce,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,I,J,$.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ce,$.width,$.height,$.depth,0,I,J,$.data);else if(A.isData3DTexture)Be?(He&&t.texStorage3D(s.TEXTURE_3D,Oe,ce,$.width,$.height,$.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,I,J,$.data)):t.texImage3D(s.TEXTURE_3D,0,ce,$.width,$.height,$.depth,0,I,J,$.data);else if(A.isFramebufferTexture){if(He)if(Be)t.texStorage2D(s.TEXTURE_2D,Oe,ce,$.width,$.height);else{let se=$.width,U=$.height;for(let oe=0;oe<Oe;oe++)t.texImage2D(s.TEXTURE_2D,oe,ce,se,U,0,I,J,null),se>>=1,U>>=1}}else if(be.length>0&&ke){Be&&He&&t.texStorage2D(s.TEXTURE_2D,Oe,ce,be[0].width,be[0].height);for(let se=0,U=be.length;se<U;se++)ie=be[se],Be?t.texSubImage2D(s.TEXTURE_2D,se,0,0,I,J,ie):t.texImage2D(s.TEXTURE_2D,se,ce,I,J,ie);A.generateMipmaps=!1}else Be?(He&&t.texStorage2D(s.TEXTURE_2D,Oe,ce,$.width,$.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,I,J,$)):t.texImage2D(s.TEXTURE_2D,0,ce,I,J,$);y(A,ke)&&x(ne),ye.__version=te.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function ve(C,A,k){if(A.image.length!==6)return;let ne=K(C,A),Q=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);let te=n.get(Q);if(Q.version!==te.__version||ne===!0){t.activeTexture(s.TEXTURE0+k);let ye=Ke.getPrimaries(Ke.workingColorSpace),he=A.colorSpace===Pn?null:Ke.getPrimaries(A.colorSpace),pe=A.colorSpace===Pn||ye===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Ee=A.isCompressedTexture||A.image[0].isCompressedTexture,Ne=A.image[0]&&A.image[0].isDataTexture,$=[];for(let se=0;se<6;se++)!Ee&&!Ne?$[se]=_(A.image[se],!1,!0,i.maxCubemapSize):$[se]=Ne?A.image[se].image:A.image[se],$[se]=Ue(A,$[se]);let ke=$[0],I=m(ke)||a,J=r.convert(A.format,A.colorSpace),ce=r.convert(A.type),ie=v(A.internalFormat,J,ce,A.colorSpace),be=a&&A.isVideoTexture!==!0,Be=te.__version===void 0||ne===!0,He=S(A,ke,I);q(s.TEXTURE_CUBE_MAP,A,I);let Oe;if(Ee){be&&Be&&t.texStorage2D(s.TEXTURE_CUBE_MAP,He,ie,ke.width,ke.height);for(let se=0;se<6;se++){Oe=$[se].mipmaps;for(let U=0;U<Oe.length;U++){let oe=Oe[U];A.format!==fn?J!==null?be?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,U,0,0,oe.width,oe.height,J,oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,U,ie,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,U,0,0,oe.width,oe.height,J,ce,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,U,ie,oe.width,oe.height,0,J,ce,oe.data)}}}else{Oe=A.mipmaps,be&&Be&&(Oe.length>0&&He++,t.texStorage2D(s.TEXTURE_CUBE_MAP,He,ie,$[0].width,$[0].height));for(let se=0;se<6;se++)if(Ne){be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,$[se].width,$[se].height,J,ce,$[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ie,$[se].width,$[se].height,0,J,ce,$[se].data);for(let U=0;U<Oe.length;U++){let ae=Oe[U].image[se].image;be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,U+1,0,0,ae.width,ae.height,J,ce,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,U+1,ie,ae.width,ae.height,0,J,ce,ae.data)}}else{be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,J,ce,$[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ie,J,ce,$[se]);for(let U=0;U<Oe.length;U++){let oe=Oe[U];be?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,U+1,0,0,J,ce,oe.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,U+1,ie,J,ce,oe.image[se])}}}y(A,I)&&x(s.TEXTURE_CUBE_MAP),te.__version=Q.version,A.onUpdate&&A.onUpdate(A)}C.__version=A.version}function ge(C,A,k,ne,Q,te){let ye=r.convert(k.format,k.colorSpace),he=r.convert(k.type),pe=v(k.internalFormat,ye,he,k.colorSpace);if(!n.get(A).__hasExternalTextures){let Ne=Math.max(1,A.width>>te),$=Math.max(1,A.height>>te);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,pe,Ne,$,A.depth,0,ye,he,null):t.texImage2D(Q,te,pe,Ne,$,0,ye,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),xe(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ne,Q,n.get(k).__webglTexture,0,Le(A)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ne,Q,n.get(k).__webglTexture,te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(C,A,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),A.depthBuffer&&!A.stencilBuffer){let ne=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(k||xe(A)){let Q=A.depthTexture;Q&&Q.isDepthTexture&&(Q.type===vi?ne=s.DEPTH_COMPONENT32F:Q.type===Di&&(ne=s.DEPTH_COMPONENT24));let te=Le(A);xe(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,te,ne,A.width,A.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,te,ne,A.width,A.height)}else s.renderbufferStorage(s.RENDERBUFFER,ne,A.width,A.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(A.depthBuffer&&A.stencilBuffer){let ne=Le(A);k&&xe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,A.width,A.height):xe(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne,s.DEPTH24_STENCIL8,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{let ne=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0;Q<ne.length;Q++){let te=ne[Q],ye=r.convert(te.format,te.colorSpace),he=r.convert(te.type),pe=v(te.internalFormat,ye,he,te.colorSpace),Ee=Le(A);k&&xe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,pe,A.width,A.height):xe(A)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,pe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,pe,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(C,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),H(A.depthTexture,0);let ne=n.get(A.depthTexture).__webglTexture,Q=Le(A);if(A.depthTexture.format===is)xe(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ne,0);else if(A.depthTexture.format===Oi)xe(A)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Me(C){let A=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!A.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ce(A.__webglFramebuffer,C)}else if(k){A.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[ne]),A.__webglDepthbuffer[ne]=s.createRenderbuffer(),Re(A.__webglDepthbuffer[ne],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),Re(A.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(C,A,k){let ne=n.get(C);A!==void 0&&ge(ne.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Me(C)}function z(C){let A=C.texture,k=n.get(C),ne=n.get(A);C.addEventListener("dispose",P),C.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=A.version,o.memory.textures++);let Q=C.isWebGLCubeRenderTarget===!0,te=C.isWebGLMultipleRenderTargets===!0,ye=m(C)||a;if(Q){k.__webglFramebuffer=[];for(let he=0;he<6;he++)if(a&&A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer[he]=[];for(let pe=0;pe<A.mipmaps.length;pe++)k.__webglFramebuffer[he][pe]=s.createFramebuffer()}else k.__webglFramebuffer[he]=s.createFramebuffer()}else{if(a&&A.mipmaps&&A.mipmaps.length>0){k.__webglFramebuffer=[];for(let he=0;he<A.mipmaps.length;he++)k.__webglFramebuffer[he]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(te)if(i.drawBuffers){let he=C.texture;for(let pe=0,Ee=he.length;pe<Ee;pe++){let Ne=n.get(he[pe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&xe(C)===!1){let he=te?A:[A];k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){let Ee=he[pe];k.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[pe]);let Ne=r.convert(Ee.format,Ee.colorSpace),$=r.convert(Ee.type),ke=v(Ee.internalFormat,Ne,$,Ee.colorSpace,C.isXRRenderTarget===!0),I=Le(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,I,ke,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,k.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture),q(s.TEXTURE_CUBE_MAP,A,ye);for(let he=0;he<6;he++)if(a&&A.mipmaps&&A.mipmaps.length>0)for(let pe=0;pe<A.mipmaps.length;pe++)ge(k.__webglFramebuffer[he][pe],C,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,pe);else ge(k.__webglFramebuffer[he],C,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);y(A,ye)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){let he=C.texture;for(let pe=0,Ee=he.length;pe<Ee;pe++){let Ne=he[pe],$=n.get(Ne);t.bindTexture(s.TEXTURE_2D,$.__webglTexture),q(s.TEXTURE_2D,Ne,ye),ge(k.__webglFramebuffer,C,Ne,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,0),y(Ne,ye)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?he=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,ne.__webglTexture),q(he,A,ye),a&&A.mipmaps&&A.mipmaps.length>0)for(let pe=0;pe<A.mipmaps.length;pe++)ge(k.__webglFramebuffer[pe],C,A,s.COLOR_ATTACHMENT0,he,pe);else ge(k.__webglFramebuffer,C,A,s.COLOR_ATTACHMENT0,he,0);y(A,ye)&&x(he),t.unbindTexture()}C.depthBuffer&&Me(C)}function yt(C){let A=m(C)||a,k=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ne=0,Q=k.length;ne<Q;ne++){let te=k[ne];if(y(te,A)){let ye=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,he=n.get(te).__webglTexture;t.bindTexture(ye,he),x(ye),t.unbindTexture()}}}function Te(C){if(a&&C.samples>0&&xe(C)===!1){let A=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],k=C.width,ne=C.height,Q=s.COLOR_BUFFER_BIT,te=[],ye=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=n.get(C),pe=C.isWebGLMultipleRenderTargets===!0;if(pe)for(let Ee=0;Ee<A.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ee=0;Ee<A.length;Ee++){te.push(s.COLOR_ATTACHMENT0+Ee),C.depthBuffer&&te.push(ye);let Ne=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(Ne===!1&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),pe&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,he.__webglColorRenderbuffer[Ee]),Ne===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ye]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ye])),pe){let $=n.get(A[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$,0)}s.blitFramebuffer(0,0,k,ne,0,0,k,ne,Q,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Ee=0;Ee<A.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,he.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,he.__webglColorRenderbuffer[Ee]);let Ne=n.get(A[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,he.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,Ne,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}}function Le(C){return Math.min(i.maxSamples,C.samples)}function xe(C){let A=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function rt(C){let A=o.render.frame;u.get(C)!==A&&(u.set(C,A),C.update())}function Ue(C,A){let k=C.colorSpace,ne=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Pl||k!==pt&&k!==Pn&&(Ke.getTransfer(k)===ct?a===!1?e.has("EXT_sRGB")===!0&&ne===fn?(C.format=Pl,C.minFilter=cn,C.generateMipmaps=!1):A=ua.sRGBToLinear(A):(ne!==fn||Q!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),A}this.allocateTextureUnit=L,this.resetTextureUnits=B,this.setTexture2D=H,this.setTexture2DArray=j,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=qe,this.setupRenderTarget=z,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=xe}function Fv(s,e,t){let n=t.isWebGL2;function i(r,o=Pn){let a,c=Ke.getTransfer(o);if(r===si)return s.UNSIGNED_BYTE;if(r===Yd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===jd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===xg)return s.BYTE;if(r===_g)return s.SHORT;if(r===vu)return s.UNSIGNED_SHORT;if(r===qd)return s.INT;if(r===Di)return s.UNSIGNED_INT;if(r===vi)return s.FLOAT;if(r===ri)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===yg)return s.ALPHA;if(r===fn)return s.RGBA;if(r===vg)return s.LUMINANCE;if(r===Mg)return s.LUMINANCE_ALPHA;if(r===is)return s.DEPTH_COMPONENT;if(r===Oi)return s.DEPTH_STENCIL;if(r===Pl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===bg)return s.RED;if(r===Zd)return s.RED_INTEGER;if(r===Sg)return s.RG;if(r===$d)return s.RG_INTEGER;if(r===Kd)return s.RGBA_INTEGER;if(r===Gc||r===Wc||r===Xc||r===qc)if(c===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Gc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Gc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Wc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===of||r===af||r===cf||r===lf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===of)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===af)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===uf||r===hf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===uf)return c===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===hf)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ff||r===df||r===pf||r===mf||r===gf||r===xf||r===_f||r===yf||r===vf||r===Mf||r===bf||r===Sf||r===Tf||r===Ef)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ff)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===df)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pf)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mf)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gf)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xf)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_f)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yf)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vf)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mf)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bf)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sf)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tf)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ef)return c===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yc||r===Af||r===wf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Yc)return c===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Af)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===wf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Tg||r===Rf||r===Cf||r===Pf)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Yc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Rf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bi?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Xl=class extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ln=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bv={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&h>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ql=class extends oi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,p=null,g=null,_=t.getContextAttributes(),m=null,d=null,y=[],x=[],v=new re,S=null,b=new Lt;b.layers.enable(1),b.viewport=new lt;let T=new Lt;T.layers.enable(2),T.viewport=new lt;let P=[b,T],M=new Xl;M.layers.enable(1),M.layers.enable(2);let E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=y[q];return K===void 0&&(K=new Nr,y[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=y[q];return K===void 0&&(K=new Nr,y[q]=K),K.getGripSpace()},this.getHand=function(q){let K=y[q];return K===void 0&&(K=new Nr,y[q]=K),K.getHandSpace()};function N(q){let K=x.indexOf(q.inputSource);if(K===-1)return;let fe=y[K];fe!==void 0&&(fe.update(q.inputSource,q.frame,l||o),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",L);for(let q=0;q<y.length;q++){let K=x[q];K!==null&&(x[q]=null,y[q].disconnect(K))}E=null,D=null,e.setRenderTarget(m),p=null,h=null,f=null,i=null,d=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",B),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(v),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Yt(p.framebufferWidth,p.framebufferHeight,{format:fn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,fe=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=_.stencil?Oi:is,fe=_.stencil?bi:Di);let ge={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(ge),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new Yt(h.textureWidth,h.textureHeight,{format:fn,type:si,depthTexture:new Ws(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Re=e.properties.get(d);Re.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(q){for(let K=0;K<q.removed.length;K++){let fe=q.removed[K],ve=x.indexOf(fe);ve>=0&&(x[ve]=null,y[ve].disconnect(fe))}for(let K=0;K<q.added.length;K++){let fe=q.added[K],ve=x.indexOf(fe);if(ve===-1){for(let Re=0;Re<y.length;Re++)if(Re>=x.length){x.push(fe),ve=Re;break}else if(x[Re]===null){x[Re]=fe,ve=Re;break}if(ve===-1)break}let ge=y[ve];ge&&ge.connect(fe)}}let O=new w,H=new w;function j(q,K,fe){O.setFromMatrixPosition(K.matrixWorld),H.setFromMatrixPosition(fe.matrixWorld);let ve=O.distanceTo(H),ge=K.projectionMatrix.elements,Re=fe.projectionMatrix.elements,Ce=ge[14]/(ge[10]-1),Me=ge[14]/(ge[10]+1),qe=(ge[9]+1)/ge[5],z=(ge[9]-1)/ge[5],yt=(ge[8]-1)/ge[0],Te=(Re[8]+1)/Re[0],Le=Ce*yt,xe=Ce*Te,rt=ve/(-yt+Te),Ue=rt*-yt;K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ue),q.translateZ(rt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let C=Ce+rt,A=Me+rt,k=Le-Ue,ne=xe+(ve-Ue),Q=qe*Me/A*C,te=z*Me/A*C;q.projectionMatrix.makePerspective(k,ne,Q,te,C,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Y(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;M.near=T.near=b.near=q.near,M.far=T.far=b.far=q.far,(E!==M.near||D!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,D=M.far);let K=q.parent,fe=M.cameras;Y(M,K);for(let ve=0;ve<fe.length;ve++)Y(fe[ve],K);fe.length===2?j(M,b,T):M.projectionMatrix.copy(b.projectionMatrix),W(q,M,K)};function W(q,K,fe){fe===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Hs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return c},this.setFoveation=function(q){c=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let Z=null;function ee(q,K){if(u=K.getViewerPose(l||o),g=K,u!==null){let fe=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ve=!1;fe.length!==M.cameras.length&&(M.cameras.length=0,ve=!0);for(let ge=0;ge<fe.length;ge++){let Re=fe[ge],Ce=null;if(p!==null)Ce=p.getViewport(Re);else{let qe=f.getViewSubImage(h,Re);Ce=qe.viewport,ge===0&&(e.setRenderTargetTextures(d,qe.colorTexture,h.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(d))}let Me=P[ge];Me===void 0&&(Me=new Lt,Me.layers.enable(ge),Me.viewport=new lt,P[ge]=Me),Me.matrix.fromArray(Re.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(Re.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ge===0&&(M.matrix.copy(Me.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ve===!0&&M.cameras.push(Me)}}for(let fe=0;fe<y.length;fe++){let ve=x[fe],ge=y[fe];ve!==null&&ge!==void 0&&ge.update(ve,K,l||o)}Z&&Z(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let ue=new rp;ue.setAnimationLoop(ee),this.setAnimationLoop=function(q){Z=q},this.dispose=function(){}}};function zv(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,sp(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,y,x,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,y,x):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Gt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Gt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=e.get(d).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Gt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kv(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){let v=x.program;n.uniformBlockBinding(y,v)}function l(y,x){let v=i[y.id];v===void 0&&(g(y),v=u(y),i[y.id]=v,y.addEventListener("dispose",m));let S=x.program;n.updateUBOMapping(y,S);let b=e.render.frame;r[y.id]!==b&&(h(y),r[y.id]=b)}function u(y){let x=f();y.__bindingPointIndex=x;let v=s.createBuffer(),S=y.__size,b=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,S,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,v),v}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let x=i[y.id],v=y.uniforms,S=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let b=0,T=v.length;b<T;b++){let P=Array.isArray(v[b])?v[b]:[v[b]];for(let M=0,E=P.length;M<E;M++){let D=P[M];if(p(D,b,M,S)===!0){let N=D.__offset,B=Array.isArray(D.value)?D.value:[D.value],L=0;for(let O=0;O<B.length;O++){let H=B[O],j=_(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,N+L,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,L),L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,x,v,S){let b=y.value,T=x+"_"+v;if(S[T]===void 0)return typeof b=="number"||typeof b=="boolean"?S[T]=b:S[T]=b.clone(),!0;{let P=S[T];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return S[T]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function g(y){let x=y.uniforms,v=0,S=16;for(let T=0,P=x.length;T<P;T++){let M=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,D=M.length;E<D;E++){let N=M[E],B=Array.isArray(N.value)?N.value:[N.value];for(let L=0,O=B.length;L<O;L++){let H=B[L],j=_(H),Y=v%S;Y!==0&&S-Y<j.boundary&&(v+=S-Y),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=j.storage}}}let b=v%S;return b>0&&(v+=S-b),y.__size=v,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function d(){for(let y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:c,update:l,dispose:d}}var Hr=class{constructor(e={}){let{canvas:t=$g(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=at,this._useLegacyLights=!1,this.toneMapping=Hn,this.toneMappingExposure=1;let x=this,v=!1,S=0,b=0,T=null,P=-1,M=null,E=new lt,D=new lt,N=null,B=new _e(0),L=0,O=t.width,H=t.height,j=1,Y=null,W=null,Z=new lt(0,0,O,H),ee=new lt(0,0,O,H),ue=!1,q=new kr,K=!1,fe=!1,ve=null,ge=new Se,Re=new re,Ce=new w,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function qe(){return T===null?j:1}let z=n;function yt(R,F){for(let G=0;G<R.length;G++){let X=R[G],V=t.getContext(X,F);if(V!==null)return V}return null}try{let R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",oe,!1),z===null){let F=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&F.shift(),z=yt(F,R),z===null)throw yt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Te,Le,xe,rt,Ue,C,A,k,ne,Q,te,ye,he,pe,Ee,Ne,$,ke,I,J,ce,ie,be,Be;function He(){Te=new ry(z),Le=new Q_(z,Te,e),Te.init(Le),ie=new Fv(z,Te,Le),xe=new Uv(z,Te,Le),rt=new cy(z),Ue=new Sv,C=new Ov(z,Te,xe,Ue,Le,ie,rt),A=new ty(x),k=new sy(x),ne=new g0(z,Le),be=new K_(z,Te,ne,Le),Q=new oy(z,ne,rt,be),te=new fy(z,Q,ne,rt),I=new hy(z,Le,C),Ne=new ey(Ue),ye=new bv(x,A,k,Te,Le,be,Ne),he=new zv(x,Ue),pe=new Ev,Ee=new Lv(Te,Le),ke=new $_(x,A,k,xe,te,h,c),$=new Nv(x,te,Le),Be=new kv(z,rt,Le,xe),J=new J_(z,Te,rt,Le),ce=new ay(z,Te,rt,Le),rt.programs=ye.programs,x.capabilities=Le,x.extensions=Te,x.properties=Ue,x.renderLists=pe,x.shadowMap=$,x.state=xe,x.info=rt}He();let Oe=new ql(x,z);this.xr=Oe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let R=Te.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Te.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(O,H,!1))},this.getSize=function(R){return R.set(O,H)},this.setSize=function(R,F,G=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,H=F,t.width=Math.floor(R*j),t.height=Math.floor(F*j),G===!0&&(t.style.width=R+"px",t.style.height=F+"px"),this.setViewport(0,0,R,F)},this.getDrawingBufferSize=function(R){return R.set(O*j,H*j).floor()},this.setDrawingBufferSize=function(R,F,G){O=R,H=F,j=G,t.width=Math.floor(R*G),t.height=Math.floor(F*G),this.setViewport(0,0,R,F)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(Z)},this.setViewport=function(R,F,G,X){R.isVector4?Z.set(R.x,R.y,R.z,R.w):Z.set(R,F,G,X),xe.viewport(E.copy(Z).multiplyScalar(j).floor())},this.getScissor=function(R){return R.copy(ee)},this.setScissor=function(R,F,G,X){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,F,G,X),xe.scissor(D.copy(ee).multiplyScalar(j).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(R){xe.setScissorTest(ue=R)},this.setOpaqueSort=function(R){Y=R},this.setTransparentSort=function(R){W=R},this.getClearColor=function(R){return R.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(R=!0,F=!0,G=!0){let X=0;if(R){let V=!1;if(T!==null){let me=T.texture.format;V=me===Kd||me===$d||me===Zd}if(V){let me=T.texture.type,we=me===si||me===Di||me===vu||me===bi||me===Yd||me===jd,De=ke.getClearColor(),Fe=ke.getClearAlpha(),Xe=De.r,ze=De.g,Ve=De.b;we?(p[0]=Xe,p[1]=ze,p[2]=Ve,p[3]=Fe,z.clearBufferuiv(z.COLOR,0,p)):(g[0]=Xe,g[1]=ze,g[2]=Ve,g[3]=Fe,z.clearBufferiv(z.COLOR,0,g))}else X|=z.COLOR_BUFFER_BIT}F&&(X|=z.DEPTH_BUFFER_BIT),G&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),pe.dispose(),Ee.dispose(),Ue.dispose(),A.dispose(),k.dispose(),te.dispose(),be.dispose(),Be.dispose(),ye.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",sn),Oe.removeEventListener("sessionend",ft),ve&&(ve.dispose(),ve=null),rn.stop()};function se(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let R=rt.autoReset,F=$.enabled,G=$.autoUpdate,X=$.needsUpdate,V=$.type;He(),rt.autoReset=R,$.enabled=F,$.autoUpdate=G,$.needsUpdate=X,$.type=V}function oe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){let F=R.target;F.removeEventListener("dispose",ae),Pe(F)}function Pe(R){Ae(R),Ue.remove(R)}function Ae(R){let F=Ue.get(R).programs;F!==void 0&&(F.forEach(function(G){ye.releaseProgram(G)}),R.isShaderMaterial&&ye.releaseShaderCache(R))}this.renderBufferDirect=function(R,F,G,X,V,me){F===null&&(F=Me);let we=V.isMesh&&V.matrixWorld.determinant()<0,De=Hm(R,F,G,X,V);xe.setMaterial(X,we);let Fe=G.index,Xe=1;if(X.wireframe===!0){if(Fe=Q.getWireframeAttribute(G),Fe===void 0)return;Xe=2}let ze=G.drawRange,Ve=G.attributes.position,Tt=ze.start*Xe,xn=(ze.start+ze.count)*Xe;me!==null&&(Tt=Math.max(Tt,me.start*Xe),xn=Math.min(xn,(me.start+me.count)*Xe)),Fe!==null?(Tt=Math.max(Tt,0),xn=Math.min(xn,Fe.count)):Ve!=null&&(Tt=Math.max(Tt,0),xn=Math.min(xn,Ve.count));let Ht=xn-Tt;if(Ht<0||Ht===1/0)return;be.setup(V,X,De,G,Fe);let fi,mt=J;if(Fe!==null&&(fi=ne.get(Fe),mt=ce,mt.setIndex(fi)),V.isMesh)X.wireframe===!0?(xe.setLineWidth(X.wireframeLinewidth*qe()),mt.setMode(z.LINES)):mt.setMode(z.TRIANGLES);else if(V.isLine){let Ye=X.linewidth;Ye===void 0&&(Ye=1),xe.setLineWidth(Ye*qe()),V.isLineSegments?mt.setMode(z.LINES):V.isLineLoop?mt.setMode(z.LINE_LOOP):mt.setMode(z.LINE_STRIP)}else V.isPoints?mt.setMode(z.POINTS):V.isSprite&&mt.setMode(z.TRIANGLES);if(V.isBatchedMesh)mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)mt.renderInstances(Tt,Ht,V.count);else if(G.isInstancedBufferGeometry){let Ye=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,zc=Math.min(G.instanceCount,Ye);mt.renderInstances(Tt,Ht,zc)}else mt.render(Tt,Ht)};function tt(R,F,G){R.transparent===!0&&R.side===gt&&R.forceSinglePass===!1?(R.side=Gt,R.needsUpdate=!0,Ao(R,F,G),R.side=bn,R.needsUpdate=!0,Ao(R,F,G),R.side=gt):Ao(R,F,G)}this.compile=function(R,F,G=null){G===null&&(G=R),m=Ee.get(G),m.init(),y.push(m),G.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),R!==G&&R.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights);let X=new Set;return R.traverse(function(V){let me=V.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){let De=me[we];tt(De,G,V),X.add(De)}else tt(me,G,V),X.add(me)}),y.pop(),m=null,X},this.compileAsync=function(R,F,G=null){let X=this.compile(R,F,G);return new Promise(V=>{function me(){if(X.forEach(function(we){Ue.get(we).currentProgram.isReady()&&X.delete(we)}),X.size===0){V(R);return}setTimeout(me,10)}Te.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let it=null;function kt(R){it&&it(R)}function sn(){rn.stop()}function ft(){rn.start()}let rn=new rp;rn.setAnimationLoop(kt),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(R){it=R,Oe.setAnimationLoop(R),R===null?rn.stop():rn.start()},Oe.addEventListener("sessionstart",sn),Oe.addEventListener("sessionend",ft),this.render=function(R,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(F),F=Oe.getCamera()),R.isScene===!0&&R.onBeforeRender(x,R,F,T),m=Ee.get(R,y.length),m.init(),y.push(m),ge.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(ge),fe=this.localClippingEnabled,K=Ne.init(this.clippingPlanes,fe),_=pe.get(R,d.length),_.init(),d.push(_),ti(R,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Y,W),this.info.render.frame++,K===!0&&Ne.beginShadows();let G=m.state.shadowsArray;if($.render(G,R,F),K===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),ke.render(_,R),m.setupLights(x._useLegacyLights),F.isArrayCamera){let X=F.cameras;for(let V=0,me=X.length;V<me;V++){let we=X[V];qh(_,R,we,we.viewport)}}else qh(_,R,F);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(x,R,F),be.resetDefaultState(),P=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function ti(R,F,G,X){if(R.visible===!1)return;if(R.layers.test(F.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(F);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){X&&Ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ge);let we=te.update(R),De=R.material;De.visible&&_.push(R,we,De,G,Ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||q.intersectsObject(R))){let we=te.update(R),De=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ce.copy(R.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ce.copy(we.boundingSphere.center)),Ce.applyMatrix4(R.matrixWorld).applyMatrix4(ge)),Array.isArray(De)){let Fe=we.groups;for(let Xe=0,ze=Fe.length;Xe<ze;Xe++){let Ve=Fe[Xe],Tt=De[Ve.materialIndex];Tt&&Tt.visible&&_.push(R,we,Tt,G,Ce.z,Ve)}}else De.visible&&_.push(R,we,De,G,Ce.z,null)}}let me=R.children;for(let we=0,De=me.length;we<De;we++)ti(me[we],F,G,X)}function qh(R,F,G,X){let V=R.opaque,me=R.transmissive,we=R.transparent;m.setupLightsView(G),K===!0&&Ne.setGlobalState(x.clippingPlanes,G),me.length>0&&km(V,me,F,G),X&&xe.viewport(E.copy(X)),V.length>0&&Eo(V,F,G),me.length>0&&Eo(me,F,G),we.length>0&&Eo(we,F,G),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function km(R,F,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let me=Le.isWebGL2;ve===null&&(ve=new Yt(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?ri:si,minFilter:Ui,samples:me?4:0})),x.getDrawingBufferSize(Re),me?ve.setSize(Re.x,Re.y):ve.setSize(la(Re.x),la(Re.y));let we=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(B),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();let De=x.toneMapping;x.toneMapping=Hn,Eo(R,G,X),C.updateMultisampleRenderTarget(ve),C.updateRenderTargetMipmap(ve);let Fe=!1;for(let Xe=0,ze=F.length;Xe<ze;Xe++){let Ve=F[Xe],Tt=Ve.object,xn=Ve.geometry,Ht=Ve.material,fi=Ve.group;if(Ht.side===gt&&Tt.layers.test(X.layers)){let mt=Ht.side;Ht.side=Gt,Ht.needsUpdate=!0,Yh(Tt,G,X,xn,Ht,fi),Ht.side=mt,Ht.needsUpdate=!0,Fe=!0}}Fe===!0&&(C.updateMultisampleRenderTarget(ve),C.updateRenderTargetMipmap(ve)),x.setRenderTarget(we),x.setClearColor(B,L),x.toneMapping=De}function Eo(R,F,G){let X=F.isScene===!0?F.overrideMaterial:null;for(let V=0,me=R.length;V<me;V++){let we=R[V],De=we.object,Fe=we.geometry,Xe=X===null?we.material:X,ze=we.group;De.layers.test(G.layers)&&Yh(De,F,G,Fe,Xe,ze)}}function Yh(R,F,G,X,V,me){R.onBeforeRender(x,F,G,X,V,me),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(x,F,G,X,R,me),V.transparent===!0&&V.side===gt&&V.forceSinglePass===!1?(V.side=Gt,V.needsUpdate=!0,x.renderBufferDirect(G,F,X,V,R,me),V.side=bn,V.needsUpdate=!0,x.renderBufferDirect(G,F,X,V,R,me),V.side=gt):x.renderBufferDirect(G,F,X,V,R,me),R.onAfterRender(x,F,G,X,V,me)}function Ao(R,F,G){F.isScene!==!0&&(F=Me);let X=Ue.get(R),V=m.state.lights,me=m.state.shadowsArray,we=V.state.version,De=ye.getParameters(R,V.state,me,F,G),Fe=ye.getProgramCacheKey(De),Xe=X.programs;X.environment=R.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(R.isMeshStandardMaterial?k:A).get(R.envMap||X.environment),Xe===void 0&&(R.addEventListener("dispose",ae),Xe=new Map,X.programs=Xe);let ze=Xe.get(Fe);if(ze!==void 0){if(X.currentProgram===ze&&X.lightsStateVersion===we)return Zh(R,De),ze}else De.uniforms=ye.getUniforms(R),R.onBuild(G,De,x),R.onBeforeCompile(De,x),ze=ye.acquireProgram(De,Fe),Xe.set(Fe,ze),X.uniforms=De.uniforms;let Ve=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=Ne.uniform),Zh(R,De),X.needsLights=Gm(R),X.lightsStateVersion=we,X.needsLights&&(Ve.ambientLightColor.value=V.state.ambient,Ve.lightProbe.value=V.state.probe,Ve.directionalLights.value=V.state.directional,Ve.directionalLightShadows.value=V.state.directionalShadow,Ve.spotLights.value=V.state.spot,Ve.spotLightShadows.value=V.state.spotShadow,Ve.rectAreaLights.value=V.state.rectArea,Ve.ltc_1.value=V.state.rectAreaLTC1,Ve.ltc_2.value=V.state.rectAreaLTC2,Ve.pointLights.value=V.state.point,Ve.pointLightShadows.value=V.state.pointShadow,Ve.hemisphereLights.value=V.state.hemi,Ve.directionalShadowMap.value=V.state.directionalShadowMap,Ve.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ve.spotShadowMap.value=V.state.spotShadowMap,Ve.spotLightMatrix.value=V.state.spotLightMatrix,Ve.spotLightMap.value=V.state.spotLightMap,Ve.pointShadowMap.value=V.state.pointShadowMap,Ve.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=ze,X.uniformsList=null,ze}function jh(R){if(R.uniformsList===null){let F=R.currentProgram.getUniforms();R.uniformsList=Fs.seqWithValue(F.seq,R.uniforms)}return R.uniformsList}function Zh(R,F){let G=Ue.get(R);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Hm(R,F,G,X,V){F.isScene!==!0&&(F=Me),C.resetTextureUnits();let me=F.fog,we=X.isMeshStandardMaterial?F.environment:null,De=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:pt,Fe=(X.isMeshStandardMaterial?k:A).get(X.envMap||we),Xe=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ve=!!G.morphAttributes.position,Tt=!!G.morphAttributes.normal,xn=!!G.morphAttributes.color,Ht=Hn;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ht=x.toneMapping);let fi=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,mt=fi!==void 0?fi.length:0,Ye=Ue.get(X),zc=m.state.lights;if(K===!0&&(fe===!0||R!==M)){let wn=R===M&&X.id===P;Ne.setState(X,R,wn)}let vt=!1;X.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==zc.state.version||Ye.outputColorSpace!==De||V.isBatchedMesh&&Ye.batching===!1||!V.isBatchedMesh&&Ye.batching===!0||V.isInstancedMesh&&Ye.instancing===!1||!V.isInstancedMesh&&Ye.instancing===!0||V.isSkinnedMesh&&Ye.skinning===!1||!V.isSkinnedMesh&&Ye.skinning===!0||V.isInstancedMesh&&Ye.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ye.instancingColor===!1&&V.instanceColor!==null||Ye.envMap!==Fe||X.fog===!0&&Ye.fog!==me||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ne.numPlanes||Ye.numIntersection!==Ne.numIntersection)||Ye.vertexAlphas!==Xe||Ye.vertexTangents!==ze||Ye.morphTargets!==Ve||Ye.morphNormals!==Tt||Ye.morphColors!==xn||Ye.toneMapping!==Ht||Le.isWebGL2===!0&&Ye.morphTargetsCount!==mt)&&(vt=!0):(vt=!0,Ye.__version=X.version);let Zi=Ye.currentProgram;vt===!0&&(Zi=Ao(X,F,V));let $h=!1,br=!1,kc=!1,Zt=Zi.getUniforms(),$i=Ye.uniforms;if(xe.useProgram(Zi.program)&&($h=!0,br=!0,kc=!0),X.id!==P&&(P=X.id,br=!0),$h||M!==R){Zt.setValue(z,"projectionMatrix",R.projectionMatrix),Zt.setValue(z,"viewMatrix",R.matrixWorldInverse);let wn=Zt.map.cameraPosition;wn!==void 0&&wn.setValue(z,Ce.setFromMatrixPosition(R.matrixWorld)),Le.logarithmicDepthBuffer&&Zt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Zt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,br=!0,kc=!0)}if(V.isSkinnedMesh){Zt.setOptional(z,V,"bindMatrix"),Zt.setOptional(z,V,"bindMatrixInverse");let wn=V.skeleton;wn&&(Le.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),Zt.setValue(z,"boneTexture",wn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Zt.setOptional(z,V,"batchingTexture"),Zt.setValue(z,"batchingTexture",V._matricesTexture,C));let Hc=G.morphAttributes;if((Hc.position!==void 0||Hc.normal!==void 0||Hc.color!==void 0&&Le.isWebGL2===!0)&&I.update(V,G,Zi),(br||Ye.receiveShadow!==V.receiveShadow)&&(Ye.receiveShadow=V.receiveShadow,Zt.setValue(z,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&($i.envMap.value=Fe,$i.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),br&&(Zt.setValue(z,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&Vm($i,kc),me&&X.fog===!0&&he.refreshFogUniforms($i,me),he.refreshMaterialUniforms($i,X,j,H,ve),Fs.upload(z,jh(Ye),$i,C)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Fs.upload(z,jh(Ye),$i,C),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Zt.setValue(z,"center",V.center),Zt.setValue(z,"modelViewMatrix",V.modelViewMatrix),Zt.setValue(z,"normalMatrix",V.normalMatrix),Zt.setValue(z,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let wn=X.uniformsGroups;for(let Vc=0,Wm=wn.length;Vc<Wm;Vc++)if(Le.isWebGL2){let Kh=wn[Vc];Be.update(Kh,Zi),Be.bind(Kh,Zi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zi}function Vm(R,F){R.ambientLightColor.needsUpdate=F,R.lightProbe.needsUpdate=F,R.directionalLights.needsUpdate=F,R.directionalLightShadows.needsUpdate=F,R.pointLights.needsUpdate=F,R.pointLightShadows.needsUpdate=F,R.spotLights.needsUpdate=F,R.spotLightShadows.needsUpdate=F,R.rectAreaLights.needsUpdate=F,R.hemisphereLights.needsUpdate=F}function Gm(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,F,G){Ue.get(R.texture).__webglTexture=F,Ue.get(R.depthTexture).__webglTexture=G;let X=Ue.get(R);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,F){let G=Ue.get(R);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(R,F=0,G=0){T=R,S=F,b=G;let X=!0,V=null,me=!1,we=!1;if(R){let Fe=Ue.get(R);Fe.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(z.FRAMEBUFFER,null),X=!1):Fe.__webglFramebuffer===void 0?C.setupRenderTarget(R):Fe.__hasExternalTextures&&C.rebindTextures(R,Ue.get(R.texture).__webglTexture,Ue.get(R.depthTexture).__webglTexture);let Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(we=!0);let ze=Ue.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?V=ze[F][G]:V=ze[F],me=!0):Le.isWebGL2&&R.samples>0&&C.useMultisampledRTT(R)===!1?V=Ue.get(R).__webglMultisampledFramebuffer:Array.isArray(ze)?V=ze[G]:V=ze,E.copy(R.viewport),D.copy(R.scissor),N=R.scissorTest}else E.copy(Z).multiplyScalar(j).floor(),D.copy(ee).multiplyScalar(j).floor(),N=ue;if(xe.bindFramebuffer(z.FRAMEBUFFER,V)&&Le.drawBuffers&&X&&xe.drawBuffers(R,V),xe.viewport(E),xe.scissor(D),xe.setScissorTest(N),me){let Fe=Ue.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,Fe.__webglTexture,G)}else if(we){let Fe=Ue.get(R.texture),Xe=F||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Fe.__webglTexture,G||0,Xe)}P=-1},this.readRenderTargetPixels=function(R,F,G,X,V,me,we){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ue.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){xe.bindFramebuffer(z.FRAMEBUFFER,De);try{let Fe=R.texture,Xe=Fe.format,ze=Fe.type;if(Xe!==fn&&ie.convert(Xe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ve=ze===ri&&(Te.has("EXT_color_buffer_half_float")||Le.isWebGL2&&Te.has("EXT_color_buffer_float"));if(ze!==si&&ie.convert(ze)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===vi&&(Le.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=R.width-X&&G>=0&&G<=R.height-V&&z.readPixels(F,G,X,V,ie.convert(Xe),ie.convert(ze),me)}finally{let Fe=T!==null?Ue.get(T).__webglFramebuffer:null;xe.bindFramebuffer(z.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(R,F,G=0){let X=Math.pow(2,-G),V=Math.floor(F.image.width*X),me=Math.floor(F.image.height*X);C.setTexture2D(F,0),z.copyTexSubImage2D(z.TEXTURE_2D,G,0,0,R.x,R.y,V,me),xe.unbindTexture()},this.copyTextureToTexture=function(R,F,G,X=0){let V=F.image.width,me=F.image.height,we=ie.convert(G.format),De=ie.convert(G.type);C.setTexture2D(G,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment),F.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,X,R.x,R.y,V,me,we,De,F.image.data):F.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,X,R.x,R.y,F.mipmaps[0].width,F.mipmaps[0].height,we,F.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,X,R.x,R.y,we,De,F.image),X===0&&G.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(R,F,G,X,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let me=R.max.x-R.min.x+1,we=R.max.y-R.min.y+1,De=R.max.z-R.min.z+1,Fe=ie.convert(X.format),Xe=ie.convert(X.type),ze;if(X.isData3DTexture)C.setTexture3D(X,0),ze=z.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)C.setTexture2DArray(X,0),ze=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);let Ve=z.getParameter(z.UNPACK_ROW_LENGTH),Tt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),xn=z.getParameter(z.UNPACK_SKIP_PIXELS),Ht=z.getParameter(z.UNPACK_SKIP_ROWS),fi=z.getParameter(z.UNPACK_SKIP_IMAGES),mt=G.isCompressedTexture?G.mipmaps[V]:G.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,mt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,mt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,R.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,R.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,R.min.z),G.isDataTexture||G.isData3DTexture?z.texSubImage3D(ze,V,F.x,F.y,F.z,me,we,De,Fe,Xe,mt.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(ze,V,F.x,F.y,F.z,me,we,De,Fe,mt.data)):z.texSubImage3D(ze,V,F.x,F.y,F.z,me,we,De,Fe,Xe,mt),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ve),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Tt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,xn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ht),z.pixelStorei(z.UNPACK_SKIP_IMAGES,fi),V===0&&X.generateMipmaps&&z.generateMipmap(ze),xe.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?C.setTextureCube(R,0):R.isData3DTexture?C.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?C.setTexture2DArray(R,0):C.setTexture2D(R,0),xe.unbindTexture()},this.resetState=function(){S=0,b=0,T=null,xe.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===bu?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===Ha?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===at?ss:ep}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ss?at:pt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Yl=class extends Hr{};Yl.prototype.isWebGL1Renderer=!0;var Xs=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Vr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Vn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},on=new w,Gr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new st(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var vd=new w,Md=new lt,bd=new lt,Hv=new w,Sd=new Se,Zo=new w,xl=new ln,Td=new Se,_l=new Gn,_a=class extends $e{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rf,this.bindMatrix=new Se,this.bindMatrixInverse=new Se,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zo),this.boundingBox.expandByPoint(Zo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zo),this.boundingSphere.expandByPoint(Zo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xl.copy(this.boundingSphere),xl.applyMatrix4(i),e.ray.intersectsSphere(xl)!==!1&&(Td.copy(i).invert(),_l.copy(e.ray).applyMatrix4(Td),!(this.boundingBox!==null&&_l.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,_l)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Md.fromBufferAttribute(i.attributes.skinIndex,e),bd.fromBufferAttribute(i.attributes.skinWeight,e),vd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=bd.getComponent(r);if(o!==0){let a=Md.getComponent(r);Sd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Hv.copy(vd).applyMatrix4(Sd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Wr=class extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}},as=class extends Jt{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Mt,u=Mt,f,h){super(null,o,a,c,l,u,i,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ed=new Se,Vv=new Se,ya=class s{constructor(e=[],t=[]){this.uuid=Vn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Se)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Se;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Vv;Ed.multiplyMatrices(a,t[r]),Ed.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new as(t,e,e,fn,vi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Wr),this.bones.push(o),this.boneInverses.push(new Se().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},cs=class extends st{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new Se,Ad=new Se,$o=[],wd=new nt,Gv=new Se,wr=new $e,Rr=new ln,va=class extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cs(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Gv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),wd.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union(wd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),Rr.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(Rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(n),e.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Is),Ad.multiplyMatrices(n,Is),wr.matrixWorld=Ad,wr.raycast(e,$o);for(let o=0,a=$o.length;o<a;o++){let c=$o[o];c.instanceId=r,c.object=this,t.push(c)}$o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Xr=class extends pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Rd=new w,Cd=new w,Pd=new Se,yl=new Gn,Ko=new ln,qs=class extends xt{constructor(e=new Dt,t=new Xr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Rd.fromBufferAttribute(t,i-1),Cd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Rd.distanceTo(Cd);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(i),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;Pd.copy(i).invert(),yl.copy(e.ray).applyMatrix4(Pd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new w,u=new w,f=new w,h=new w,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let d=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let x=d,v=y-1;x<v;x+=p){let S=g.getX(x),b=g.getX(x+1);if(l.fromBufferAttribute(m,S),u.fromBufferAttribute(m,b),yl.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);let P=e.ray.origin.distanceTo(h);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let d=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=d,v=y-1;x<v;x+=p){if(l.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),yl.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);let b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Ld=new w,Id=new w,Ma=class extends qs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ld.fromBufferAttribute(t,i),Id.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ld.distanceTo(Id);e.setAttribute("lineDistance",new Rt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ba=class extends qs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},qr=class extends pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dd=new Se,jl=new Gn,Jo=new ln,Qo=new w,Sa=class extends xt{constructor(e=new Dt,t=new qr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(i),Jo.radius+=r,e.ray.intersectsSphere(Jo)===!1)return;Dd.copy(i).invert(),jl.copy(e.ray).applyMatrix4(Dd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let h=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let g=h,_=p;g<_;g++){let m=l.getX(g);Qo.fromBufferAttribute(f,m),Nd(Qo,m,c,i,e,t,this)}}else{let h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,_=p;g<_;g++)Qo.fromBufferAttribute(f,g),Nd(Qo,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Nd(s,e,t,n,i,r,o){let a=jl.distanceSqToPoint(s);if(a<t){let c=new w;jl.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var Xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let u=n[i],h=n[i+1]-u,p=(o-u)/h;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new re:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new w,i=[],r=[],o=[],a=new w,c=new Se;for(let p=0;p<=e;p++){let g=p/e;i[p]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(wt(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(wt(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ta=class extends Xn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let n=t||new re,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,p=l-this.aY;c=h*u-p*f+this.aX,l=h*f+p*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zl=class extends Ta{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Eu(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,p=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,p*=u,i(o,a,h,p)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var ea=new w,vl=new Eu,Ml=new Eu,bl=new Eu,Yr=class extends Xn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new w){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(ea.subVectors(i[0],i[1]).add(i[0]),l=ea);let f=i[a%r],h=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(ea.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=ea),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),vl.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,g,_,m),Ml.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,g,_,m),bl.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(vl.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Ml.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),bl.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(vl.calc(c),Ml.calc(c),bl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new w().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ud(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Wv(s,e){let t=1-s;return t*t*e}function Xv(s,e){return 2*(1-s)*s*e}function qv(s,e){return s*s*e}function Ur(s,e,t,n){return Wv(s,e)+Xv(s,t)+qv(s,n)}function Yv(s,e){let t=1-s;return t*t*t*e}function jv(s,e){let t=1-s;return 3*t*t*s*e}function Zv(s,e){return 3*(1-s)*s*s*e}function $v(s,e){return s*s*s*e}function Or(s,e,t,n,i){return Yv(s,e)+jv(s,t)+Zv(s,n)+$v(s,i)}var $l=class extends Xn{constructor(e=new re,t=new re,n=new re,i=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(e,i.x,r.x,o.x,a.x),Or(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Kl=class extends Xn{constructor(e=new w,t=new w,n=new w,i=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new w){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Or(e,i.x,r.x,o.x,a.x),Or(e,i.y,r.y,o.y,a.y),Or(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jl=class extends Xn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ql=class extends Xn{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eu=class extends Xn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ur(e,i.x,r.x,o.x),Ur(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends Xn{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Ur(e,i.x,r.x,o.x),Ur(e,i.y,r.y,o.y),Ur(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tu=class extends Xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(Ud(a,c.x,l.x,u.x,f.x),Ud(a,c.y,l.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new re().fromArray(i))}return this}},Kv=Object.freeze({__proto__:null,ArcCurve:Zl,CatmullRomCurve3:Yr,CubicBezierCurve:$l,CubicBezierCurve3:Kl,EllipseCurve:Ta,LineCurve:Jl,LineCurve3:Ql,QuadraticBezierCurve:eu,QuadraticBezierCurve3:Ea,SplineCurve:tu});var Aa=class s extends Dt{constructor(e=new Ea(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new w,c=new w,l=new re,u=new w,f=[],h=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Rt(f,3)),this.setAttribute("normal",new Rt(h,3)),this.setAttribute("uv",new Rt(p,2));function _(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),y(),d()}function m(x){u=e.getPointAt(x/t,u);let v=o.normals[x],S=o.binormals[x];for(let b=0;b<=i;b++){let T=b/i*Math.PI*2,P=Math.sin(T),M=-Math.cos(T);c.x=M*v.x+P*S.x,c.y=M*v.y+P*S.y,c.z=M*v.z+P*S.z,c.normalize(),h.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,f.push(a.x,a.y,a.z)}}function d(){for(let x=1;x<=t;x++)for(let v=1;v<=i;v++){let S=(i+1)*(x-1)+(v-1),b=(i+1)*x+(v-1),T=(i+1)*x+v,P=(i+1)*(x-1)+v;g.push(S,b,P),g.push(b,T,P)}}function y(){for(let x=0;x<=t;x++)for(let v=0;v<=i;v++)l.x=x/t,l.y=v/i,p.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Kv[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var wa=class extends Nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ft=class extends pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mu,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},In=class extends Ft{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ra=class extends pn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mu,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};function ta(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Jv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Qv(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Od(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function hp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var Fi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},nu=class extends Fi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lf,endingEnd:Lf}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case If:r=e,a=2*t-n;break;case Df:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case If:o=e,c=2*n-t;break;case Df:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,d=-h*m+2*h*_-h*g,y=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,v=p*m-p*_;for(let S=0;S!==a;++S)r[S]=d*o[u+S]+y*o[l+S]+x*o[c+S]+v*o[f+S];return r}},iu=class extends Fi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}},su=class extends Fi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Dn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ta(t,this.TimeBufferType),this.values=ta(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ta(e.times,Array),values:ta(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new su(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new nu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ks:t=this.InterpolantFactoryMethodDiscrete;break;case rs:t=this.InterpolantFactoryMethodLinear;break;case jc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return rs;case this.InterpolantFactoryMethodSmooth:return jc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Jv(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===jc,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{let f=a*n,h=f-n,p=f+n;for(let g=0;g!==n;++g){let _=t[f+g];if(_!==t[h+g]||_!==t[p+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=rs;var Bi=class extends Dn{};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=ks;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends Dn{};Ca.prototype.ValueTypeName="color";var Si=class extends Dn{};Si.prototype.ValueTypeName="number";var ru=class extends Fi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let u=l+a;l!==u;l+=4)dn.slerpFlat(r,0,o,l-a,o,l,c);return r}},ai=class extends Dn{InterpolantFactoryMethodLinear(e){return new ru(this.times,this.values,this.getValueSize(),e)}};ai.prototype.ValueTypeName="quaternion";ai.prototype.DefaultInterpolation=rs;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Dn{};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=ks;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends Dn{};Ti.prototype.ValueTypeName="vector";var Pa=class{constructor(e,t=-1,n,i=Eg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Vn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(tM(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Dn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=Qv(c);c=Od(c,1,u),l=Od(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Si(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let f=u[1],h=i[f];h||(i[f]=h=[]),h.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(f,h,p,g,_){if(p.length!==0){let m=[],d=[];hp(p,m,d,g),m.length!==0&&_.push(new f(h,m,d))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let f=0;f<l.length;f++){let h=l[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let p={},g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let _=0;_<h[g].morphTargets.length;_++)p[h[g].morphTargets[_]]=-1;for(let _ in p){let m=[],d=[];for(let y=0;y!==h[g].morphTargets.length;++y){let x=h[g];m.push(x.time),d.push(x.morphTarget===_?1:0)}i.push(new Si(".morphTargetInfluence["+_+"]",m,d))}c=p.length*o}else{let p=".bones["+t[f].name+"]";n(Ti,p+".position",h,"pos",i),n(ai,p+".quaternion",h,"rot",i),n(Ti,p+".scale",h,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function eM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Si;case"vector":case"vector2":case"vector3":case"vector4":return Ti;case"color":return Ca;case"quaternion":return ai;case"bool":case"boolean":return Bi;case"string":return zi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function tM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=eM(s.type);if(s.times===void 0){let t=[],n=[];hp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Ni={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},ou=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let p=l[f],g=l[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},nM=new ou,qn=class{constructor(e){this.manager=e!==void 0?e:nM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var _i={},au=class extends Error{constructor(e,t){super(e),this.response=t}},ki=class extends qn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ni.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_i[e]!==void 0){_i[e].push({onLoad:t,onProgress:n,onError:i});return}_i[e]=[],_i[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=_i[e],f=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=h?parseInt(h):0,g=p!==0,_=0,m=new ReadableStream({start(d){y();function y(){f.read().then(({done:x,value:v})=>{if(x)d.close();else{_+=v.byteLength;let S=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let b=0,T=u.length;b<T;b++){let P=u[b];P.onProgress&&P.onProgress(S)}d.enqueue(v),y()}})}}});return new Response(m)}else throw new au(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{Ni.add(e,l);let u=_i[e];delete _i[e];for(let f=0,h=u.length;f<h;f++){let p=u[f];p.onLoad&&p.onLoad(l)}}).catch(l=>{let u=_i[e];if(u===void 0)throw this.manager.itemError(e),l;delete _i[e];for(let f=0,h=u.length;f<h;f++){let p=u[f];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var cu=class extends qn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ni.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Br("img");function c(){u(),Ni.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(f){u(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var La=class extends qn{constructor(e){super(e)}load(e,t,n,i){let r=new Jt,o=new cu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Ys=class extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ia=class extends Ys{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Sl=new Se,Fd=new w,Bd=new w,jr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Fd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fd),Bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bd),t.updateMatrixWorld(),Sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},lu=class extends jr{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Hs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Da=class extends Ys{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new lu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},zd=new Se,Cr=new w,Tl=new w,uu=class extends jr{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Cr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cr),Tl.copy(n.position),Tl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Tl),n.updateMatrixWorld(),i.makeTranslation(-Cr.x,-Cr.y,-Cr.z),zd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zd)}},js=class extends Ys{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new uu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},hu=class extends jr{constructor(){super(new Wn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ls=class extends Ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new hu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Hi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Na=class extends qn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ni.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ni.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Ni.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ni.add(e,c),r.manager.itemStart(e)}};var Ua=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=kd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function kd(){return(typeof performance>"u"?Date:performance).now()}var Au="\\[\\]\\.:\\/",iM=new RegExp("["+Au+"]","g"),wu="[^"+Au+"]",sM="[^"+Au.replace("\\.","")+"]",rM=/((?:WC+[\/:])*)/.source.replace("WC",wu),oM=/(WCOD+)?/.source.replace("WCOD",sM),aM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wu),cM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wu),lM=new RegExp("^"+rM+oM+aM+cM+"$"),uM=["material","materials","bones","map"],fu=class{constructor(e,t,n){let i=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iM,"")}static parseTrackName(e){let t=lM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);uM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=fu;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gb=new Float32Array(1);var Oa=class{constructor(e,t,n=0,i=1/0){this.ray=new Gn(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return du(e,this,n,t),n.sort(Hd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)du(e[i],this,n,t);return n.sort(Hd),n}};function Hd(s,e){return s.distance-e.distance}function du(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)du(i[r],e,t,!0)}}var Zr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Vd=new w,na=new w,mn=class{constructor(e=new w,t=new w){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Vd.subVectors(e,this.start),na.subVectors(this.end,this.start);let n=na.dot(na),r=na.dot(Vd)/n;return t&&(r=wt(r,0,1)),r}closestPointToPoint(e,t,n){let i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var fp={type:"change"},Ru={type:"start"},dp={type:"end"},Ga=new Gn,pp=new qt,fM=Math.cos(70*$s.DEG2RAD),Wa=class extends oi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:us.ROTATE,MIDDLE:us.DOLLY,RIGHT:us.PAN},this.touches={ONE:hs.ROTATE,TWO:hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",te),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",te),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(fp),n.update(),r=i.NONE},this.update=(function(){let I=new w,J=new dn().setFromUnitVectors(e.up,new w(0,1,0)),ce=J.clone().invert(),ie=new w,be=new dn,Be=new w,He=2*Math.PI;return function(se=null){let U=n.object.position;I.copy(U).sub(n.target),I.applyQuaternion(J),a.setFromVector3(I),n.autoRotate&&r===i.NONE&&D(M(se)),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let oe=n.minAzimuthAngle,ae=n.maxAzimuthAngle;isFinite(oe)&&isFinite(ae)&&(oe<-Math.PI?oe+=He:oe>Math.PI&&(oe-=He),ae<-Math.PI?ae+=He:ae>Math.PI&&(ae-=He),oe<=ae?a.theta=Math.max(oe,Math.min(ae,a.theta)):a.theta=a.theta>(oe+ae)/2?Math.max(oe,a.theta):Math.min(ae,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&b||n.object.isOrthographicCamera?a.radius=W(a.radius):a.radius=W(a.radius*l),I.setFromSpherical(a),I.applyQuaternion(ce),U.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0));let Pe=!1;if(n.zoomToCursor&&b){let Ae=null;if(n.object.isPerspectiveCamera){let tt=I.length();Ae=W(tt*l);let it=tt-Ae;n.object.position.addScaledVector(v,it),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let tt=new w(S.x,S.y,0);tt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Pe=!0;let it=new w(S.x,S.y,0);it.unproject(n.object),n.object.position.sub(it).add(tt),n.object.updateMatrixWorld(),Ae=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ae!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ae).add(n.object.position):(Ga.origin.copy(n.object.position),Ga.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ga.direction))<fM?e.lookAt(n.target):(pp.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ga.intersectPlane(pp,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Pe=!0);return l=1,b=!1,Pe||ie.distanceToSquared(n.object.position)>o||8*(1-be.dot(n.object.quaternion))>o||Be.distanceToSquared(n.target)>0?(n.dispatchEvent(fp),ie.copy(n.object.position),be.copy(n.object.quaternion),Be.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",pe),n.domElement.removeEventListener("pointerdown",Ue),n.domElement.removeEventListener("pointercancel",A),n.domElement.removeEventListener("wheel",Q),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",A),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",te),n._domElementKeyEvents=null)};let n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=i.NONE,o=1e-6,a=new Zr,c=new Zr,l=1,u=new w,f=new re,h=new re,p=new re,g=new re,_=new re,m=new re,d=new re,y=new re,x=new re,v=new w,S=new re,b=!1,T=[],P={};function M(I){return I!==null?2*Math.PI/60*n.autoRotateSpeed*I:2*Math.PI/60/60*n.autoRotateSpeed}function E(I){let J=Math.abs(I)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*J)}function D(I){c.theta-=I}function N(I){c.phi-=I}let B=(function(){let I=new w;return function(ce,ie){I.setFromMatrixColumn(ie,0),I.multiplyScalar(-ce),u.add(I)}})(),L=(function(){let I=new w;return function(ce,ie){n.screenSpacePanning===!0?I.setFromMatrixColumn(ie,1):(I.setFromMatrixColumn(ie,0),I.crossVectors(n.object.up,I)),I.multiplyScalar(ce),u.add(I)}})(),O=(function(){let I=new w;return function(ce,ie){let be=n.domElement;if(n.object.isPerspectiveCamera){let Be=n.object.position;I.copy(Be).sub(n.target);let He=I.length();He*=Math.tan(n.object.fov/2*Math.PI/180),B(2*ce*He/be.clientHeight,n.object.matrix),L(2*ie*He/be.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(B(ce*(n.object.right-n.object.left)/n.object.zoom/be.clientWidth,n.object.matrix),L(ie*(n.object.top-n.object.bottom)/n.object.zoom/be.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function H(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(I,J){if(!n.zoomToCursor)return;b=!0;let ce=n.domElement.getBoundingClientRect(),ie=I-ce.left,be=J-ce.top,Be=ce.width,He=ce.height;S.x=ie/Be*2-1,S.y=-(be/He)*2+1,v.set(S.x,S.y,1).unproject(n.object).sub(n.object.position).normalize()}function W(I){return Math.max(n.minDistance,Math.min(n.maxDistance,I))}function Z(I){f.set(I.clientX,I.clientY)}function ee(I){Y(I.clientX,I.clientX),d.set(I.clientX,I.clientY)}function ue(I){g.set(I.clientX,I.clientY)}function q(I){h.set(I.clientX,I.clientY),p.subVectors(h,f).multiplyScalar(n.rotateSpeed);let J=n.domElement;D(2*Math.PI*p.x/J.clientHeight),N(2*Math.PI*p.y/J.clientHeight),f.copy(h),n.update()}function K(I){y.set(I.clientX,I.clientY),x.subVectors(y,d),x.y>0?H(E(x.y)):x.y<0&&j(E(x.y)),d.copy(y),n.update()}function fe(I){_.set(I.clientX,I.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),O(m.x,m.y),g.copy(_),n.update()}function ve(I){Y(I.clientX,I.clientY),I.deltaY<0?j(E(I.deltaY)):I.deltaY>0&&H(E(I.deltaY)),n.update()}function ge(I){let J=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,n.keyPanSpeed),J=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(0,-n.keyPanSpeed),J=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?D(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(n.keyPanSpeed,0),J=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?D(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):O(-n.keyPanSpeed,0),J=!0;break}J&&(I.preventDefault(),n.update())}function Re(I){if(T.length===1)f.set(I.pageX,I.pageY);else{let J=ke(I),ce=.5*(I.pageX+J.x),ie=.5*(I.pageY+J.y);f.set(ce,ie)}}function Ce(I){if(T.length===1)g.set(I.pageX,I.pageY);else{let J=ke(I),ce=.5*(I.pageX+J.x),ie=.5*(I.pageY+J.y);g.set(ce,ie)}}function Me(I){let J=ke(I),ce=I.pageX-J.x,ie=I.pageY-J.y,be=Math.sqrt(ce*ce+ie*ie);d.set(0,be)}function qe(I){n.enableZoom&&Me(I),n.enablePan&&Ce(I)}function z(I){n.enableZoom&&Me(I),n.enableRotate&&Re(I)}function yt(I){if(T.length==1)h.set(I.pageX,I.pageY);else{let ce=ke(I),ie=.5*(I.pageX+ce.x),be=.5*(I.pageY+ce.y);h.set(ie,be)}p.subVectors(h,f).multiplyScalar(n.rotateSpeed);let J=n.domElement;D(2*Math.PI*p.x/J.clientHeight),N(2*Math.PI*p.y/J.clientHeight),f.copy(h)}function Te(I){if(T.length===1)_.set(I.pageX,I.pageY);else{let J=ke(I),ce=.5*(I.pageX+J.x),ie=.5*(I.pageY+J.y);_.set(ce,ie)}m.subVectors(_,g).multiplyScalar(n.panSpeed),O(m.x,m.y),g.copy(_)}function Le(I){let J=ke(I),ce=I.pageX-J.x,ie=I.pageY-J.y,be=Math.sqrt(ce*ce+ie*ie);y.set(0,be),x.set(0,Math.pow(y.y/d.y,n.zoomSpeed)),H(x.y),d.copy(y);let Be=(I.pageX+J.x)*.5,He=(I.pageY+J.y)*.5;Y(Be,He)}function xe(I){n.enableZoom&&Le(I),n.enablePan&&Te(I)}function rt(I){n.enableZoom&&Le(I),n.enableRotate&&yt(I)}function Ue(I){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",A)),Ee(I),I.pointerType==="touch"?ye(I):k(I))}function C(I){n.enabled!==!1&&(I.pointerType==="touch"?he(I):ne(I))}function A(I){Ne(I),T.length===0&&(n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",A)),n.dispatchEvent(dp),r=i.NONE}function k(I){let J;switch(I.button){case 0:J=n.mouseButtons.LEFT;break;case 1:J=n.mouseButtons.MIDDLE;break;case 2:J=n.mouseButtons.RIGHT;break;default:J=-1}switch(J){case us.DOLLY:if(n.enableZoom===!1)return;ee(I),r=i.DOLLY;break;case us.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;ue(I),r=i.PAN}else{if(n.enableRotate===!1)return;Z(I),r=i.ROTATE}break;case us.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;Z(I),r=i.ROTATE}else{if(n.enablePan===!1)return;ue(I),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ru)}function ne(I){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;q(I);break;case i.DOLLY:if(n.enableZoom===!1)return;K(I);break;case i.PAN:if(n.enablePan===!1)return;fe(I);break}}function Q(I){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(I.preventDefault(),n.dispatchEvent(Ru),ve(I),n.dispatchEvent(dp))}function te(I){n.enabled===!1||n.enablePan===!1||ge(I)}function ye(I){switch($(I),T.length){case 1:switch(n.touches.ONE){case hs.ROTATE:if(n.enableRotate===!1)return;Re(I),r=i.TOUCH_ROTATE;break;case hs.PAN:if(n.enablePan===!1)return;Ce(I),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case hs.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;qe(I),r=i.TOUCH_DOLLY_PAN;break;case hs.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;z(I),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ru)}function he(I){switch($(I),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;yt(I),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;Te(I),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;xe(I),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;rt(I),n.update();break;default:r=i.NONE}}function pe(I){n.enabled!==!1&&I.preventDefault()}function Ee(I){T.push(I.pointerId)}function Ne(I){delete P[I.pointerId];for(let J=0;J<T.length;J++)if(T[J]==I.pointerId){T.splice(J,1);return}}function $(I){let J=P[I.pointerId];J===void 0&&(J=new re,P[I.pointerId]=J),J.set(I.pageX,I.pageY)}function ke(I){let J=I.pointerId===T[0]?T[1]:T[0];return P[J]}n.domElement.addEventListener("contextmenu",pe),n.domElement.addEventListener("pointerdown",Ue),n.domElement.addEventListener("pointercancel",A),n.domElement.addEventListener("wheel",Q,{passive:!1}),this.update()}};function Cu(s,e){if(e===Qd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Kr||e===ka){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===Kr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Xa=class extends qn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ou(t)}),this.register(function(t){return new Xu(t)}),this.register(function(t){return new qu(t)}),this.register(function(t){return new Yu(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new zu(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new Hu(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Vu(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Wu(t)}),this.register(function(t){return new Gu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new ju(t)}),this.register(function(t){return new Zu(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Hi.extractUrlBase(e);o=Hi.resolveURL(l,this.path)}else o=Hi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ki(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===yp){try{o[je.KHR_BINARY_GLTF]=new $u(e)}catch(f){i&&i(f);return}r=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new ih(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let f=this.pluginCallbacks[u](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case je.KHR_MATERIALS_UNLIT:o[f]=new Nu;break;case je.KHR_DRACO_MESH_COMPRESSION:o[f]=new Ku(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[f]=new Ju;break;case je.KHR_MESH_QUANTIZATION:o[f]=new Qu;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function dM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Du=class{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new _e(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],pt);let f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ls(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new js(u),l.distance=f;break;case"spot":l=new Da(u),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Gi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Nu=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){let i=[];e.color=new _e(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],pt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,at))}return Promise.all(i)}},Uu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Ou=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(a,a)}return Promise.all(r)}},Fu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Bu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new _e(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],pt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,at)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},zu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},ku=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new _e().setRGB(a[0],a[1],a[2],pt),Promise.all(r)}},Hu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Vu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new _e().setRGB(a[0],a[1],a[2],pt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,at)),Promise.all(r)}},Gu=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Wu=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:In}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Xu=class{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},qu=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Yu=class{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},ju=class{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,f=i.byteStride,h=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,h,i.mode,i.filter),p})})}else return null}},Zu=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Nn.TRIANGLES&&l.mode!==Nn.TRIANGLE_STRIP&&l.mode!==Nn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),f=u.isGroup?u.children:[u],h=l[0].count,p=[];for(let g of f){let _=new Se,m=new w,d=new dn,y=new w(1,1,1),x=new va(g.geometry,g.material,h);for(let v=0;v<h;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&d.fromBufferAttribute(c.ROTATION,v),c.SCALE&&y.fromBufferAttribute(c.SCALE,v),x.setMatrixAt(v,_.compose(m,d,y));for(let v in c)if(v==="_COLOR_0"){let S=c[v];x.instanceColor=new cs(S.array,S.itemSize,S.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);xt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},yp="glTF",Jr=12,mp={JSON:1313821514,BIN:5130562},$u=class{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Jr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Jr,r=new DataView(e,Jr),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===mp.JSON){let l=new Uint8Array(e,Jr+o,a);this.content=n.decode(l)}else if(c===mp.BIN){let l=Jr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ku=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let f=th[u]||u.toLowerCase();a[f]=o[u]}for(let u in e.attributes){let f=th[u]||u.toLowerCase();if(o[u]!==void 0){let h=n.accessors[e.attributes[u]],p=Js[h.componentType];l[f]=p.name,c[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){i.decodeDracoFile(u,function(p){for(let g in p.attributes){let _=p.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}f(p)},a,l,pt,h)})})}},Ju=class{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Qu=class{constructor(){this.name=je.KHR_MESH_QUANTIZATION}},qa=class extends Fi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,f=(n-t)/u,h=f*f,p=h*f,g=e*l,_=g-l,m=-2*p+3*h,d=p-h,y=1-m,x=d-h+f;for(let v=0;v!==a;v++){let S=o[_+v+a],b=o[_+v+c]*u,T=o[g+v+a],P=o[g+v]*u;r[v]=y*S+x*b+m*T+d*P}return r}},pM=new dn,eh=class extends qa{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return pM.fromArray(r).normalize().toArray(r),r}},Nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gp={9728:Mt,9729:cn,9984:sa,9985:yu,9986:Pr,9987:Ui},xp={33071:vn,33648:Fr,10497:Sn},Pu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},th={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mM={CUBICSPLINE:void 0,LINEAR:rs,STEP:ks},Lu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:bn})),s.DefaultMaterial}function fs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Gi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function xM(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let f=e[l];if(n){let h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;o.push(h)}if(i){let h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;a.push(h)}if(r){let h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;c.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],f=l[1],h=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function _M(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yM(s){let e,t=s.extensions&&s.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Iu(t.attributes):e=s.indices+":"+Iu(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Iu(s.targets[n]);return e}function Iu(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function nh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var MM=new Se,ih=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new dM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new La(this.options.manager):this.textureLoader=new Na(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ki(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return fs(r,a,i),Gi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Hi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Pu[i.type],a=Js[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new st(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Pu[i.type],l=Js[i.componentType],u=l.BYTES_PER_ELEMENT,f=u*c,h=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,m;if(p&&p!==f){let d=Math.floor(h/p),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+d+":"+i.count,x=t.cache.get(y);x||(_=new l(a,d*p,i.count*p/u),x=new Vr(_,p/u),t.cache.add(y,x)),m=new Gr(x,c,h%p/u,g)}else a===null?_=new l(i.count*c):_=new l(a,h,i.count*c),m=new st(_,c,g);if(i.sparse!==void 0){let d=Pu.SCALAR,y=Js[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,S=new y(o[1],x,i.sparse.count*d),b=new l(o[2],v,i.sparse.count*c);a!==null&&(m=new st(m.array.slice(),m.itemSize,m.normalized));for(let T=0,P=S.length;T<P;T++){let M=S[T];if(m.setX(M,b[T*c]),c>=2&&m.setY(M,b[T*c+1]),c>=3&&m.setZ(M,b[T*c+2]),c>=4&&m.setW(M,b[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let h=(r.samplers||{})[o.sampler]||{};return u.magFilter=gp[h.magFilter]||cn,u.minFilter=gp[h.minFilter]||Ui,u.wrapS=xp[h.wrapS]||Sn,u.wrapT=xp[h.wrapT]||Sn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){l=!0;let h=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(h),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(f){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(_){let m=new Jt(_);m.needsUpdate=!0,h(m)}),t.load(Hi.resolveURL(f,r.path),g,void 0,p)})}).then(function(f){return l===!0&&a.revokeObjectURL(c),f.userData.mimeType=o.mimeType||vM(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new qr,pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Xr,pn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ft}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[je.KHR_MATERIALS_UNLIT]){let f=i[je.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),l.push(f.extendParams(a,r,t))}else{let f=r.pbrMetallicRoughness||{};if(a.color=new _e(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){let h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],pt),a.opacity=h[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",f.baseColorTexture,at)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=gt);let u=r.alphaMode||Lu.OPAQUE;if(u===Lu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Lu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Qt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==Qt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Qt){let f=r.emissiveFactor;a.emissive=new _e().setRGB(f[0],f[1],f[2],pt)}return r.emissiveTexture!==void 0&&o!==Qt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,at)),Promise.all(l).then(function(){let f=new o(a);return r.name&&(f.name=r.name),Gi(f,r),t.associations.set(f,{materials:e}),r.extensions&&fs(i,f,r),f})}createUniqueName(e){let t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return _p(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=yM(l),f=i[u];if(f)o.push(f.promise);else{let h;l.extensions&&l.extensions[je.KHR_DRACO_MESH_COMPRESSION]?h=r(l):h=_p(new Dt,l,t),i[u]={primitive:l,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?gM(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],f=[];for(let p=0,g=u.length;p<g;p++){let _=u[p],m=o[p],d,y=l[p];if(m.mode===Nn.TRIANGLES||m.mode===Nn.TRIANGLE_STRIP||m.mode===Nn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new _a(_,y):new $e(_,y),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Nn.TRIANGLE_STRIP?d.geometry=Cu(d.geometry,ka):m.mode===Nn.TRIANGLE_FAN&&(d.geometry=Cu(d.geometry,Kr));else if(m.mode===Nn.LINES)d=new Ma(_,y);else if(m.mode===Nn.LINE_STRIP)d=new qs(_,y);else if(m.mode===Nn.LINE_LOOP)d=new ba(_,y);else if(m.mode===Nn.POINTS)d=new Sa(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&_M(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Gi(d,r),m.extensions&&fs(i,d,m),t.assignFinalMaterial(d),f.push(d)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return r.extensions&&fs(i,f[0],r),f[0];let h=new Ln;r.extensions&&fs(i,h,r),t.associations.set(h,{meshes:e});for(let p=0,g=f.length;p<g;p++)h.add(f[p]);return h})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt($s.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Wn(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Gi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let f=o[l];if(f){a.push(f);let h=new Se;r!==null&&h.fromArray(r.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ya(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let f=0,h=i.channels.length;f<h;f++){let p=i.channels[f],g=i.samplers[p.sampler],_=p.target,m=_.node,d=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",d)),c.push(this.getDependency("accessor",y)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(f){let h=f[0],p=f[1],g=f[2],_=f[3],m=f[4],d=[];for(let y=0,x=h.length;y<x;y++){let v=h[y],S=p[y],b=g[y],T=_[y],P=m[y];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let M=n._createAnimationTracks(v,S,b,T,P);if(M)for(let E=0;E<M.length;E++)d.push(M[E])}return new Pa(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],f=l[1],h=l[2];h!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(h,MM)});for(let p=0,g=f.length;p<g;p++)u.add(f[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Wr:l.length>1?u=new Ln:l.length===1?u=l[0]:u=new xt,u!==l[0])for(let f=0,h=l.length;f<h;f++)u.add(l[f]);if(r.name&&(u.userData.name=r.name,u.name=o),Gi(u,r),r.extensions&&fs(n,u,r),r.matrix!==void 0){let f=new Se;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Ln;n.name&&(r.name=i.createUniqueName(n.name)),Gi(r,n),n.extensions&&fs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,f=c.length;u<f;u++)r.add(c[u]);let l=u=>{let f=new Map;for(let[h,p]of i.associations)(h instanceof pn||h instanceof Jt)&&f.set(h,p);return u.traverse(h=>{let p=i.associations.get(h);p!=null&&f.set(h,p)}),f};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];Vi[r.path]===Vi.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(a);let l;switch(Vi[r.path]){case Vi.weights:l=Si;break;case Vi.rotation:l=ai;break;case Vi.position:case Vi.scale:l=Ti;break;default:n.itemSize===1?l=Si:l=Ti;break}let u=i.interpolation!==void 0?mM[i.interpolation]:rs,f=this._getArrayFromAccessor(n);for(let h=0,p=c.length;h<p;h++){let g=new l(c[h]+"."+Vi[r.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=nh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof ai?eh:qa;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function bM(s,e,t){let n=e.attributes,i=new nt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new w(c[0],c[1],c[2]),new w(l[0],l[1],l[2])),a.normalized){let u=nh(Js[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new w,c=new w;for(let l=0,u=r.length;l<u;l++){let f=r[l];if(f.POSITION!==void 0){let h=t.json.accessors[f.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){let _=nh(Js[h.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new ln;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function _p(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=th[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Ke.workingColorSpace!==pt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),Gi(s,e),bM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?xM(s,e.targets,t):s})}var sh=new WeakMap,Ya=class extends qn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){let r=new ki(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,at).catch(n)}decodeDracoFile(e,t,n,i,r=pt,o=()=>{}){let a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){let n=JSON.stringify(t);if(sh.has(e)){let c=sh.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i,r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(i=c,new Promise((l,u)=>{i._callbacks[r]={resolve:l,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),sh.set(e,{key:n,promise:a}),a}_createGeometry(e){let t=new Dt;e.index&&t.setIndex(new st(e.index.array,1));for(let n=0;n<e.attributes.length;n++){let i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,c=new st(o,a);r==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==at)return;let n=new _e;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){let n=new ki(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;let e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{let i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);let r=SM.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){let i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){let o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});let n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}};function SM(){let s,e;onmessage=function(o){let a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(f){u({draco:f})},DracoDecoderModule(s)});break;case"decode":let c=a.buffer,l=a.taskConfig;e.then(u=>{let f=u.draco,h=new f.Decoder;try{let p=t(f,h,new Int8Array(c),l),g=p.attributes.map(_=>_.array.buffer);p.index&&g.push(p.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:p},g)}catch(p){console.error(p),self.postMessage({type:"error",id:a.id,error:p.message})}finally{f.destroy(h)}});break}};function t(o,a,c,l){let u=l.attributeIDs,f=l.attributeTypes,h,p,g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)h=new o.Mesh,p=a.DecodeArrayToMesh(c,c.byteLength,h);else if(g===o.POINT_CLOUD)h=new o.PointCloud,p=a.DecodeArrayToPointCloud(c,c.byteLength,h);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||h.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());let _={index:null,attributes:[]};for(let m in u){let d=self[f[m]],y,x;if(l.useUniqueIDs)x=u[m],y=a.GetAttributeByUniqueId(h,x);else{if(x=a.GetAttributeId(h,o[u[m]]),x===-1)continue;y=a.GetAttribute(h,x)}let v=i(o,a,h,m,d,y);m==="color"&&(v.vertexColorSpace=l.vertexColorSpace),_.attributes.push(v)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,h)),o.destroy(h),_}function n(o,a,c){let u=c.num_faces()*3,f=u*4,h=o._malloc(f);a.GetTrianglesUInt32Array(c,f,h);let p=new Uint32Array(o.HEAPF32.buffer,h,u).slice();return o._free(h),{array:p,itemSize:1}}function i(o,a,c,l,u,f){let h=f.num_components(),g=c.num_points()*h,_=g*u.BYTES_PER_ELEMENT,m=r(o,u),d=o._malloc(_);a.GetAttributeDataArrayForAllPoints(c,f,m,_,d);let y=new u(o.HEAPF32.buffer,d,g).slice();return o._free(d),{name:l,array:y,itemSize:h}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var ja=class extends Xs{constructor(e=null){super();let t=new os;t.deleteAttribute("uv");let n=new Ft({side:Gt}),i=new Ft,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new js(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new $e(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let c=new $e(t,i);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new $e(t,i);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let u=new $e(t,i);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let f=new $e(t,i);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let h=new $e(t,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let p=new $e(t,i);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let g=new $e(t,Qs(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new $e(t,Qs(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let m=new $e(t,Qs(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let d=new $e(t,Qs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let y=new $e(t,Qs(20));y.position.set(3.235,11.486,-12.541),y.scale.set(2.5,2,.1),this.add(y);let x=new $e(t,Qs(100));x.position.set(0,20,0),x.scale.set(1,.1,1),this.add(x)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Qs(s){let e=new Qt;return e.color.setScalar(s),e}var er={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},TM=new Wn(-1,1,1,-1,0,1),rh=class extends Dt{constructor(){super(),this.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Rt([0,2,0,0,2,0],2))}},EM=new rh,Wi=class{constructor(e){this._mesh=new $e(EM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,TM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Za=class extends Tn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yn.clone(e.uniforms),this.material=new Nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Qr=class extends Tn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},$a=class extends Tn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ka=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new Yt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ri}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Za(er),this.copyPass.material.blending=It,this.clock=new Ua}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Qr!==void 0&&(o instanceof Qr?n=!0:o instanceof $a&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ja=class extends Tn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _e}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var eo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new re},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Se},cameraProjectionMatrixInverse:{value:new Se},cameraWorldMatrix:{value:new Se},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new w(-1,-1,-1)},sceneBoxMax:{value:new w(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0, totalWeight = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},to={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Qa={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function vp(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=AM(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],c=2*Math.PI*a/n,l=new w(Math.cos(c),Math.sin(c),0).normalize();i[o*4]=(l.x*.5+.5)*255,i[o*4+1]=(l.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new as(i,e,e);return r.wrapS=Sn,r.wrapT=Sn,r.needsUpdate=!0,r}function AM(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=o++;r++,i--}return n}var no={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:oh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new re},cameraProjectionMatrixInverse:{value:new Se},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function oh(s,e,t){let n=wM(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function wM(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,o=Math.pow(i/(s-1),t);n.push(new w(Math.cos(r),Math.sin(r),o))}return n}var ec=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}noise(e,t){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),u=(3-Math.sqrt(3))/6,f=(c+l)*u,h=c-f,p=l-f,g=e-h,_=t-p,m,d;g>_?(m=1,d=0):(m=0,d=1);let y=g-m+u,x=_-d+u,v=g-1+2*u,S=_-1+2*u,b=c&255,T=l&255,P=this.perm[b+this.perm[T]]%12,M=this.perm[b+m+this.perm[T+d]]%12,E=this.perm[b+1+this.perm[T+1]]%12,D=.5-g*g-_*_;D<0?n=0:(D*=D,n=D*D*this.dot(this.grad3[P],g,_));let N=.5-y*y-x*x;N<0?i=0:(N*=N,i=N*N*this.dot(this.grad3[M],y,x));let B=.5-v*v-S*S;return B<0?r=0:(B*=B,r=B*B*this.dot(this.grad3[E],v,S)),70*(n+i+r)}noise3d(e,t,n){let i,r,o,a,l=(e+t+n)*.3333333333333333,u=Math.floor(e+l),f=Math.floor(t+l),h=Math.floor(n+l),p=1/6,g=(u+f+h)*p,_=u-g,m=f-g,d=h-g,y=e-_,x=t-m,v=n-d,S,b,T,P,M,E;y>=x?x>=v?(S=1,b=0,T=0,P=1,M=1,E=0):y>=v?(S=1,b=0,T=0,P=1,M=0,E=1):(S=0,b=0,T=1,P=1,M=0,E=1):x<v?(S=0,b=0,T=1,P=0,M=1,E=1):y<v?(S=0,b=1,T=0,P=0,M=1,E=1):(S=0,b=1,T=0,P=1,M=1,E=0);let D=y-S+p,N=x-b+p,B=v-T+p,L=y-P+2*p,O=x-M+2*p,H=v-E+2*p,j=y-1+3*p,Y=x-1+3*p,W=v-1+3*p,Z=u&255,ee=f&255,ue=h&255,q=this.perm[Z+this.perm[ee+this.perm[ue]]]%12,K=this.perm[Z+S+this.perm[ee+b+this.perm[ue+T]]]%12,fe=this.perm[Z+P+this.perm[ee+M+this.perm[ue+E]]]%12,ve=this.perm[Z+1+this.perm[ee+1+this.perm[ue+1]]]%12,ge=.6-y*y-x*x-v*v;ge<0?i=0:(ge*=ge,i=ge*ge*this.dot3(this.grad3[q],y,x,v));let Re=.6-D*D-N*N-B*B;Re<0?r=0:(Re*=Re,r=Re*Re*this.dot3(this.grad3[K],D,N,B));let Ce=.6-L*L-O*O-H*H;Ce<0?o=0:(Ce*=Ce,o=Ce*Ce*this.dot3(this.grad3[fe],L,O,H));let Me=.6-j*j-Y*Y-W*W;return Me<0?a=0:(Me*=Me,a=Me*Me*this.dot3(this.grad3[ve],j,Y,W)),32*(i+r+o+a)}noise4d(e,t,n,i){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,u,f,h,p,g,_=(e+t+n+i)*c,m=Math.floor(e+_),d=Math.floor(t+_),y=Math.floor(n+_),x=Math.floor(i+_),v=(m+d+y+x)*l,S=m-v,b=d-v,T=y-v,P=x-v,M=e-S,E=t-b,D=n-T,N=i-P,B=M>E?32:0,L=M>D?16:0,O=E>D?8:0,H=M>N?4:0,j=E>N?2:0,Y=D>N?1:0,W=B+L+O+H+j+Y,Z=o[W][0]>=3?1:0,ee=o[W][1]>=3?1:0,ue=o[W][2]>=3?1:0,q=o[W][3]>=3?1:0,K=o[W][0]>=2?1:0,fe=o[W][1]>=2?1:0,ve=o[W][2]>=2?1:0,ge=o[W][3]>=2?1:0,Re=o[W][0]>=1?1:0,Ce=o[W][1]>=1?1:0,Me=o[W][2]>=1?1:0,qe=o[W][3]>=1?1:0,z=M-Z+l,yt=E-ee+l,Te=D-ue+l,Le=N-q+l,xe=M-K+2*l,rt=E-fe+2*l,Ue=D-ve+2*l,C=N-ge+2*l,A=M-Re+3*l,k=E-Ce+3*l,ne=D-Me+3*l,Q=N-qe+3*l,te=M-1+4*l,ye=E-1+4*l,he=D-1+4*l,pe=N-1+4*l,Ee=m&255,Ne=d&255,$=y&255,ke=x&255,I=a[Ee+a[Ne+a[$+a[ke]]]]%32,J=a[Ee+Z+a[Ne+ee+a[$+ue+a[ke+q]]]]%32,ce=a[Ee+K+a[Ne+fe+a[$+ve+a[ke+ge]]]]%32,ie=a[Ee+Re+a[Ne+Ce+a[$+Me+a[ke+qe]]]]%32,be=a[Ee+1+a[Ne+1+a[$+1+a[ke+1]]]]%32,Be=.6-M*M-E*E-D*D-N*N;Be<0?u=0:(Be*=Be,u=Be*Be*this.dot4(r[I],M,E,D,N));let He=.6-z*z-yt*yt-Te*Te-Le*Le;He<0?f=0:(He*=He,f=He*He*this.dot4(r[J],z,yt,Te,Le));let Oe=.6-xe*xe-rt*rt-Ue*Ue-C*C;Oe<0?h=0:(Oe*=Oe,h=Oe*Oe*this.dot4(r[ce],xe,rt,Ue,C));let se=.6-A*A-k*k-ne*ne-Q*Q;se<0?p=0:(se*=se,p=se*se*this.dot4(r[ie],A,k,ne,Q));let U=.6-te*te-ye*ye-he*he-pe*pe;return U<0?g=0:(U*=U,g=U*U*this.dot4(r[be],te,ye,he,pe)),27*(u+f+h+p+g)}};var io=class s extends Tn{constructor(e,t,n,i,r,o,a){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=vp(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new Yt(this.width,this.height,{type:ri}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Nt({defines:Object.assign({},eo.defines),uniforms:Yn.clone(eo.uniforms),vertexShader:eo.vertexShader,fragmentShader:eo.fragmentShader,blending:It,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.definesPERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ra,this.normalMaterial.blending=It,this.pdMaterial=new Nt({defines:Object.assign({},no.defines),uniforms:Yn.clone(no.uniforms),vertexShader:no.vertexShader,fragmentShader:no.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Nt({defines:Object.assign({},to.defines),uniforms:Yn.clone(to.uniforms),vertexShader:to.vertexShader,fragmentShader:to.fragmentShader,blending:It}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Nt({uniforms:Yn.clone(er.uniforms),vertexShader:er.vertexShader,fragmentShader:er.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ba,blendDst:Zs,blendEquation:Cn,blendSrcAlpha:Fa,blendDstAlpha:Zs,blendEquationAlpha:Cn}),this.blendMaterial=new Nt({uniforms:Yn.clone(Qa.uniforms),vertexShader:Qa.vertexShader,fragmentShader:Qa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:pu,blendSrc:Ba,blendDst:Zs,blendEquation:Cn,blendSrcAlpha:Fa,blendDstAlpha:Zs,blendEquationAlpha:Cn}),this.fsQuad=new Wi(null),this.originalClearColor=new _e,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ws,this.depthTexture.format=Oi,this.depthTexture.type=bi,this.normalRenderTarget=new Yt(this.width,this.height,{minFilter:Mt,magFilter:Mt,type:ri,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=oh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=It,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=It,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=It,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=It,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=It,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(e,t,n,i,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}renderOverride(e,t,n,i,r){e.getClearColor(this.originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){t.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){let i=t.get(n);n.visible=i}),t.clear()}generateNoise(e=64){let t=new ec,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let c=o,l=a;i[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new as(i,e,e,fn,si);return r.wrapS=Sn,r.wrapT=Sn,r.needsUpdate=!0,r}};io.OUTPUT={Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var Mp={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var tc=class extends Tn{constructor(){super();let e=Mp;this.uniforms=Yn.clone(e.uniforms),this.material=new wa({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Wi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ke.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===xu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===$r?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===_u&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var bp=Math.pow(2,-24),nc=Symbol("SKIP_GENERATION");function RM(s){return s.index?s.index.count:s.attributes.position.count}function ci(s){return RM(s)/3}function CM(s,e=ArrayBuffer){return s>65535?new Uint32Array(new e(4*s)):new Uint16Array(new e(2*s))}function Sp(s,e){if(!s.index){let t=s.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=CM(t,n);s.setIndex(new st(i,1));for(let r=0;r<t;r++)i[r]=r}}function ah(s,e){let t=ci(s),n=e||s.drawRange,i=n.start/3,r=(n.start+n.count)/3,o=Math.max(0,i),a=Math.min(t,r)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function ch(s,e){if(!s.groups||!s.groups.length)return ah(s,e);let t=[],n=new Set,i=e||s.drawRange,r=i.start/3,o=(i.start+i.count)/3;for(let c of s.groups){let l=c.start/3,u=(c.start+c.count)/3;n.add(Math.max(r,l)),n.add(Math.min(o,u))}let a=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<a.length-1;c++){let l=a[c],u=a[c+1];t.push({offset:Math.floor(l),count:Math.floor(u-l)})}return t}function Tp(s,e){let t=ci(s),n=ch(s,e).sort((o,a)=>o.offset-a.offset),i=n[n.length-1];i.count=Math.min(t-i.offset,i.count);let r=0;return n.forEach(({count:o})=>r+=o),t!==r}function ic(s,e,t,n,i){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,f=1/0,h=1/0,p=1/0,g=-1/0,_=-1/0,m=-1/0;for(let d=e*6,y=(e+t)*6;d<y;d+=6){let x=s[d+0],v=s[d+1],S=x-v,b=x+v;S<r&&(r=S),b>c&&(c=b),x<f&&(f=x),x>g&&(g=x);let T=s[d+2],P=s[d+3],M=T-P,E=T+P;M<o&&(o=M),E>l&&(l=E),T<h&&(h=T),T>_&&(_=T);let D=s[d+4],N=s[d+5],B=D-N,L=D+N;B<a&&(a=B),L>u&&(u=L),D<p&&(p=D),D>m&&(m=D)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=u,i[0]=f,i[1]=h,i[2]=p,i[3]=g,i[4]=_,i[5]=m}function Ep(s,e=null,t=null,n=null){let i=s.attributes.position,r=s.index?s.index.array:null,o=ci(s),a=i.normalized,c;e===null?(c=new Float32Array(o*6*4),t=0,n=o):(c=e,t=t||0,n=n||o);let l=i.array,u=i.offset||0,f=3;i.isInterleavedBufferAttribute&&(f=i.data.stride);let h=["getX","getY","getZ"];for(let p=t;p<t+n;p++){let g=p*3,_=p*6,m=g+0,d=g+1,y=g+2;r&&(m=r[m],d=r[d],y=r[y]),a||(m=m*f+u,d=d*f+u,y=y*f+u);for(let x=0;x<3;x++){let v,S,b;a?(v=i[h[x]](m),S=i[h[x]](d),b=i[h[x]](y)):(v=l[m+x],S=l[d+x],b=l[y+x]);let T=v;S<T&&(T=S),b<T&&(T=b);let P=v;S>P&&(P=S),b>P&&(P=b);let M=(P-T)/2,E=x*2;c[_+E+0]=T+M,c[_+E+1]=M+(Math.abs(T)+M)*bp}}return c}function ut(s,e,t){return t.min.x=e[s],t.min.y=e[s+1],t.min.z=e[s+2],t.max.x=e[s+3],t.max.y=e[s+4],t.max.z=e[s+5],t}function lh(s){let e=-1,t=-1/0;for(let n=0;n<3;n++){let i=s[n+3]-s[n];i>t&&(t=i,e=n)}return e}function uh(s,e){e.set(s)}function hh(s,e,t){let n,i;for(let r=0;r<3;r++){let o=r+3;n=s[r],i=e[r],t[r]=n<i?n:i,n=s[o],i=e[o],t[o]=n>i?n:i}}function so(s,e,t){for(let n=0;n<3;n++){let i=e[s+2*n],r=e[s+2*n+1],o=i-r,a=i+r;o<t[n]&&(t[n]=o),a>t[n+3]&&(t[n+3]=a)}}function tr(s){let e=s[3]-s[0],t=s[4]-s[1],n=s[5]-s[2];return 2*(e*t+t*n+n*e)}var Ei=32,LM=(s,e)=>s.candidate-e.candidate,Xi=new Array(Ei).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),sc=new Float32Array(6);function Rp(s,e,t,n,i,r){let o=-1,a=0;if(r===0)o=lh(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(r===1)o=lh(s),o!==-1&&(a=IM(t,n,i,o));else if(r===2){let c=tr(s),l=1.25*i,u=n*6,f=(n+i)*6;for(let h=0;h<3;h++){let p=e[h],m=(e[h+3]-p)/Ei;if(i<Ei/4){let d=[...Xi];d.length=i;let y=0;for(let v=u;v<f;v+=6,y++){let S=d[y];S.candidate=t[v+2*h],S.count=0;let{bounds:b,leftCacheBounds:T,rightCacheBounds:P}=S;for(let M=0;M<3;M++)P[M]=1/0,P[M+3]=-1/0,T[M]=1/0,T[M+3]=-1/0,b[M]=1/0,b[M+3]=-1/0;so(v,t,b)}d.sort(LM);let x=i;for(let v=0;v<x;v++){let S=d[v];for(;v+1<x&&d[v+1].candidate===S.candidate;)d.splice(v+1,1),x--}for(let v=u;v<f;v+=6){let S=t[v+2*h];for(let b=0;b<x;b++){let T=d[b];S>=T.candidate?so(v,t,T.rightCacheBounds):(so(v,t,T.leftCacheBounds),T.count++)}}for(let v=0;v<x;v++){let S=d[v],b=S.count,T=i-S.count,P=S.leftCacheBounds,M=S.rightCacheBounds,E=0;b!==0&&(E=tr(P)/c);let D=0;T!==0&&(D=tr(M)/c);let N=1+1.25*(E*b+D*T);N<l&&(o=h,l=N,a=S.candidate)}}else{for(let x=0;x<Ei;x++){let v=Xi[x];v.count=0,v.candidate=p+m+x*m;let S=v.bounds;for(let b=0;b<3;b++)S[b]=1/0,S[b+3]=-1/0}for(let x=u;x<f;x+=6){let b=~~((t[x+2*h]-p)/m);b>=Ei&&(b=Ei-1);let T=Xi[b];T.count++,so(x,t,T.bounds)}let d=Xi[Ei-1];uh(d.bounds,d.rightCacheBounds);for(let x=Ei-2;x>=0;x--){let v=Xi[x],S=Xi[x+1];hh(v.bounds,S.rightCacheBounds,v.rightCacheBounds)}let y=0;for(let x=0;x<Ei-1;x++){let v=Xi[x],S=v.count,b=v.bounds,P=Xi[x+1].rightCacheBounds;S!==0&&(y===0?uh(b,sc):hh(b,sc,sc)),y+=S;let M=0,E=0;y!==0&&(M=tr(sc)/c);let D=i-y;D!==0&&(E=tr(P)/c);let N=1+1.25*(M*y+E*D);N<l&&(o=h,l=N,a=v.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function IM(s,e,t,n){let i=0;for(let r=e,o=e+t;r<o;r++)i+=s[r*6+n*2];return i/t}var nr=class{constructor(){this.boundingData=new Float32Array(6)}};function Cp(s,e,t,n,i,r){let o=n,a=n+i-1,c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&t[o*6+l]<c;)o++;for(;o<=a&&t[a*6+l]>=c;)a--;if(o<a){for(let u=0;u<3;u++){let f=e[o*3+u];e[o*3+u]=e[a*3+u],e[a*3+u]=f}for(let u=0;u<6;u++){let f=t[o*6+u];t[o*6+u]=t[a*6+u],t[a*6+u]=f}o++,a--}else return o}}function Pp(s,e,t,n,i,r){let o=n,a=n+i-1,c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&t[o*6+l]<c;)o++;for(;o<=a&&t[a*6+l]>=c;)a--;if(o<a){let u=s[o];s[o]=s[a],s[a]=u;for(let f=0;f<6;f++){let h=t[o*6+f];t[o*6+f]=t[a*6+f],t[a*6+f]=h}o++,a--}else return o}}function _t(s,e){return e[s+15]===65535}function Et(s,e){return e[s+6]}function Ct(s,e){return e[s+14]}function Wt(s){return s+8}function Xt(s,e){return e[s+6]}function rc(s,e){return e[s+7]}var Lp,ro,oc,Ip,DM=Math.pow(2,32);function ac(s){return"count"in s?1:1+ac(s.left)+ac(s.right)}function Dp(s,e,t){return Lp=new Float32Array(t),ro=new Uint32Array(t),oc=new Uint16Array(t),Ip=new Uint8Array(t),fh(s,e)}function fh(s,e){let t=s/4,n=s/2,i="count"in e,r=e.boundingData;for(let o=0;o<6;o++)Lp[t+o]=r[o];if(i)if(e.buffer){let o=e.buffer;Ip.set(new Uint8Array(o),s);for(let a=s,c=s+o.byteLength;a<c;a+=32){let l=a/2;_t(l,oc)||(ro[a/4+6]+=t)}return s+o.byteLength}else{let o=e.offset,a=e.count;return ro[t+6]=o,oc[n+14]=a,oc[n+15]=65535,s+32}else{let o=e.left,a=e.right,c=e.splitAxis,l;if(l=fh(s+32,o),l/4>DM)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return ro[t+6]=l/4,l=fh(l,a),ro[t+7]=c,l}}function NM(s,e){let t=(s.index?s.index.count:s.attributes.position.count)/3,n=t>2**16,i=n?4:2,r=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),o=n?new Uint32Array(r):new Uint16Array(r);for(let a=0,c=o.length;a<c;a++)o[a]=a;return o}function UM(s,e,t,n,i){let{maxDepth:r,verbose:o,maxLeafTris:a,strategy:c,onProgress:l,indirect:u}=i,f=s._indirectBuffer,h=s.geometry,p=h.index?h.index.array:null,g=u?Pp:Cp,_=ci(h),m=new Float32Array(6),d=!1,y=new nr;return ic(e,t,n,y.boundingData,m),v(y,t,n,m),y;function x(S){l&&l(S/_)}function v(S,b,T,P=null,M=0){if(!d&&M>=r&&(d=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(h))),T<=a||M>=r)return x(b+T),S.offset=b,S.count=T,S;let E=Rp(S.boundingData,P,e,b,T,c);if(E.axis===-1)return x(b+T),S.offset=b,S.count=T,S;let D=g(f,p,e,b,T,E);if(D===b||D===b+T)x(b+T),S.offset=b,S.count=T;else{S.splitAxis=E.axis;let N=new nr,B=b,L=D-b;S.left=N,ic(e,B,L,N.boundingData,m),v(N,B,L,m,M+1);let O=new nr,H=D,j=T-L;S.right=O,ic(e,H,j,O.boundingData,m),v(O,H,j,m,M+1)}return S}}function Np(s,e){let t=s.geometry;e.indirect&&(s._indirectBuffer=NM(t,e.useSharedArrayBuffer),Tp(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||Sp(t,e);let n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Ep(t),r=e.indirect?ah(t,e.range):ch(t,e.range);s._roots=r.map(o=>{let a=UM(s,i,o.offset,o.count,e),c=ac(a),l=new n(32*c);return Dp(0,a,l),l})}var gn=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let r=0,o=e.length;r<o;r++){let c=e[r][t];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let r=0,o=t.length;r<o;r++){let a=t[r],c=e.dot(a);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}};gn.prototype.setFromBox=(function(){let s=new w;return function(t,n){let i=n.min,r=n.max,o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){s.x=i.x*c+r.x*(1-c),s.y=i.y*l+r.y*(1-l),s.z=i.z*u+r.z*(1-u);let f=t.dot(s);o=Math.min(f,o),a=Math.max(f,a)}this.min=o,this.max=a}})();var aT=(function(){let s=new gn;return function(t,n){let i=t.points,r=t.satAxes,o=t.satBounds,a=n.points,c=n.satAxes,l=n.satBounds;for(let u=0;u<3;u++){let f=o[u],h=r[u];if(s.setFromPoints(h,a),f.isSeparated(s))return!1}for(let u=0;u<3;u++){let f=l[u],h=c[u];if(s.setFromPoints(h,i),f.isSeparated(s))return!1}}})();var OM=(function(){let s=new w,e=new w,t=new w;return function(i,r,o){let a=i.start,c=s,l=r.start,u=e;t.subVectors(a,l),s.subVectors(i.end,i.start),e.subVectors(r.end,r.start);let f=t.dot(u),h=u.dot(c),p=u.dot(u),g=t.dot(c),m=c.dot(c)*p-h*h,d,y;m!==0?d=(f*h-g*p)/m:d=0,y=(f+d*h)/p,o.x=d,o.y=y}})(),ao=(function(){let s=new re,e=new w,t=new w;return function(i,r,o,a){OM(i,r,s);let c=s.x,l=s.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),i.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?i.at(0,o):i.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=i.start:u=i.end;let f;l<0?f=r.start:f=r.end;let h=e,p=t;if(i.closestPointToPoint(f,!0,e),r.closestPointToPoint(u,!0,t),h.distanceToSquared(f)<=p.distanceToSquared(u)){o.copy(h),a.copy(f);return}else{o.copy(u),a.copy(p);return}}}})(),Up=(function(){let s=new w,e=new w,t=new qt,n=new mn;return function(r,o){let{radius:a,center:c}=r,{a:l,b:u,c:f}=o;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a||(n.start=l,n.end=f,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a)||(n.start=u,n.end=f,n.closestPointToPoint(c,!0,s).distanceTo(c)<=a))return!0;let _=o.getPlane(t);if(Math.abs(_.distanceToPoint(c))<=a){let d=_.projectPoint(c,e);if(o.containsPoint(d))return!0}return!1}})();var FM=1e-15;function dh(s){return Math.abs(s)<FM}var jt=class extends Mn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new w),this.satBounds=new Array(4).fill().map(()=>new gn),this.points=[this.a,this.b,this.c],this.sphere=new ln,this.plane=new qt,this.needsUpdate=!0}intersectsSphere(e){return Up(e,this)}update(){let e=this.a,t=this.b,n=this.c,i=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,i);let l=r[1],u=o[1];l.subVectors(e,t),u.setFromPoints(l,i);let f=r[2],h=o[2];f.subVectors(t,n),h.setFromPoints(f,i);let p=r[3],g=o[3];p.subVectors(n,e),g.setFromPoints(p,i),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}};jt.prototype.closestPointToSegment=(function(){let s=new w,e=new w,t=new mn;return function(i,r=null,o=null){let{start:a,end:c}=i,l=this.points,u,f=1/0;for(let h=0;h<3;h++){let p=(h+1)%3;t.start.copy(l[h]),t.end.copy(l[p]),ao(t,i,s,e),u=s.distanceToSquared(e),u<f&&(f=u,r&&r.copy(s),o&&o.copy(e))}return this.closestPointToPoint(a,s),u=a.distanceToSquared(s),u<f&&(f=u,r&&r.copy(s),o&&o.copy(a)),this.closestPointToPoint(c,s),u=c.distanceToSquared(s),u<f&&(f=u,r&&r.copy(s),o&&o.copy(c)),Math.sqrt(f)}})();jt.prototype.intersectsTriangle=(function(){let s=new jt,e=new Array(3),t=new Array(3),n=new gn,i=new gn,r=new w,o=new w,a=new w,c=new w,l=new w,u=new mn,f=new mn,h=new mn,p=new w;function g(_,m,d){let y=_.points,x=0,v=-1;for(let S=0;S<3;S++){let{start:b,end:T}=u;b.copy(y[S]),T.copy(y[(S+1)%3]),u.delta(o);let P=dh(m.distanceToPoint(b));if(dh(m.normal.dot(o))&&P){d.copy(u),x=2;break}let M=m.intersectLine(u,p);if(!M&&P&&p.copy(b),(M||P)&&!dh(p.distanceTo(T))){if(x<=1)(x===1?d.start:d.end).copy(p),P&&(v=x);else if(x>=2){(v===1?d.start:d.end).copy(p),x=2;break}if(x++,x===2&&v===-1)break}}return x}return function(m,d=null,y=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(s.copy(m),s.update(),m=s);let x=this.plane,v=m.plane;if(Math.abs(x.normal.dot(v.normal))>1-1e-10){let S=this.satBounds,b=this.satAxes;t[0]=m.a,t[1]=m.b,t[2]=m.c;for(let M=0;M<4;M++){let E=S[M],D=b[M];if(n.setFromPoints(D,t),E.isSeparated(n))return!1}let T=m.satBounds,P=m.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let M=0;M<4;M++){let E=T[M],D=P[M];if(n.setFromPoints(D,e),E.isSeparated(n))return!1}for(let M=0;M<4;M++){let E=b[M];for(let D=0;D<4;D++){let N=P[D];if(r.crossVectors(E,N),n.setFromPoints(r,e),i.setFromPoints(r,t),n.isSeparated(i))return!1}}return d&&(y||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),d.start.set(0,0,0),d.end.set(0,0,0)),!0}else{let S=g(this,v,f);if(S===1&&m.containsPoint(f.end))return d&&(d.start.copy(f.end),d.end.copy(f.end)),!0;if(S!==2)return!1;let b=g(m,x,h);if(b===1&&this.containsPoint(h.end))return d&&(d.start.copy(h.end),d.end.copy(h.end)),!0;if(b!==2)return!1;if(f.delta(a),h.delta(c),a.dot(c)<0){let B=h.start;h.start=h.end,h.end=B}let T=f.start.dot(a),P=f.end.dot(a),M=h.start.dot(a),E=h.end.dot(a),D=P<M,N=T<E;return T!==E&&M!==P&&D===N?!1:(d&&(l.subVectors(f.start,h.start),l.dot(a)>0?d.start.copy(f.start):d.start.copy(h.start),l.subVectors(f.end,h.end),l.dot(a)<0?d.end.copy(f.end):d.end.copy(h.end)),!0)}}})();jt.prototype.distanceToPoint=(function(){let s=new w;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}})();jt.prototype.distanceToTriangle=(function(){let s=new w,e=new w,t=["a","b","c"],n=new mn,i=new mn;return function(o,a=null,c=null){let l=a||c?n:null;if(this.intersectsTriangle(o,l))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let f=0;f<3;f++){let h,p=t[f],g=o[p];this.closestPointToPoint(g,s),h=g.distanceToSquared(s),h<u&&(u=h,a&&a.copy(s),c&&c.copy(g));let _=this[p];o.closestPointToPoint(_,s),h=_.distanceToSquared(s),h<u&&(u=h,a&&a.copy(_),c&&c.copy(s))}for(let f=0;f<3;f++){let h=t[f],p=t[(f+1)%3];n.set(this[h],this[p]);for(let g=0;g<3;g++){let _=t[g],m=t[(g+1)%3];i.set(o[_],o[m]),ao(n,i,s,e);let d=s.distanceToSquared(e);d<u&&(u=d,a&&a.copy(s),c&&c.copy(e))}}return Math.sqrt(u)}})();var bt=class{constructor(e,t,n){this.isOrientedBox=!0,this.min=new w,this.max=new w,this.matrix=new Se,this.invMatrix=new Se,this.points=new Array(8).fill().map(()=>new w),this.satAxes=new Array(3).fill().map(()=>new w),this.satBounds=new Array(3).fill().map(()=>new gn),this.alignedSatBounds=new Array(3).fill().map(()=>new gn),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}};bt.prototype.update=(function(){return function(){let e=this.matrix,t=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){let h=1*l|2*u|4*f,p=i[h];p.x=l?n.x:t.x,p.y=u?n.y:t.y,p.z=f?n.z:t.z,p.applyMatrix4(e)}let r=this.satBounds,o=this.satAxes,a=i[0];for(let l=0;l<3;l++){let u=o[l],f=r[l],h=1<<l,p=i[h];u.subVectors(a,p),f.setFromPoints(u,i)}let c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();bt.prototype.intersectsBox=(function(){let s=new gn;return function(t){this.needsUpdate&&this.update();let n=t.min,i=t.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,a[0].isSeparated(s)||(s.min=n.y,s.max=i.y,a[1].isSeparated(s))||(s.min=n.z,s.max=i.z,a[2].isSeparated(s)))return!1;for(let c=0;c<3;c++){let l=o[c],u=r[c];if(s.setFromBox(l,t),u.isSeparated(s))return!1}return!0}})();bt.prototype.intersectsTriangle=(function(){let s=new jt,e=new Array(3),t=new gn,n=new gn,i=new w;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(s.copy(o),s.update(),o=s);let a=this.satBounds,c=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let h=0;h<3;h++){let p=a[h],g=c[h];if(t.setFromPoints(g,e),p.isSeparated(t))return!1}let l=o.satBounds,u=o.satAxes,f=this.points;for(let h=0;h<3;h++){let p=l[h],g=u[h];if(t.setFromPoints(g,f),p.isSeparated(t))return!1}for(let h=0;h<3;h++){let p=c[h];for(let g=0;g<4;g++){let _=u[g];if(i.crossVectors(p,_),t.setFromPoints(i,e),n.setFromPoints(i,f),t.isSeparated(n))return!1}}return!0}})();bt.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();bt.prototype.distanceToPoint=(function(){let s=new w;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}})();bt.prototype.distanceToBox=(function(){let s=["x","y","z"],e=new Array(12).fill().map(()=>new mn),t=new Array(12).fill().map(()=>new mn),n=new w,i=new w;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(i),this.closestPointToPoint(i,n),o.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;let u=a*a,f=o.min,h=o.max,p=this.points,g=1/0;for(let m=0;m<8;m++){let d=p[m];i.copy(d).clamp(f,h);let y=d.distanceToSquared(i);if(y<g&&(g=y,c&&c.copy(d),l&&l.copy(i),y<u))return Math.sqrt(y)}let _=0;for(let m=0;m<3;m++)for(let d=0;d<=1;d++)for(let y=0;y<=1;y++){let x=(m+1)%3,v=(m+2)%3,S=d<<x|y<<v,b=1<<m|d<<x|y<<v,T=p[S],P=p[b];e[_].set(T,P);let E=s[m],D=s[x],N=s[v],B=t[_],L=B.start,O=B.end;L[E]=f[E],L[D]=d?f[D]:h[D],L[N]=y?f[N]:h[D],O[E]=h[E],O[D]=d?f[D]:h[D],O[N]=y?f[N]:h[D],_++}for(let m=0;m<=1;m++)for(let d=0;d<=1;d++)for(let y=0;y<=1;y++){i.x=m?h.x:f.x,i.y=d?h.y:f.y,i.z=y?h.z:f.z,this.closestPointToPoint(i,n);let x=i.distanceToSquared(n);if(x<g&&(g=x,c&&c.copy(n),l&&l.copy(i),x<u))return Math.sqrt(x)}for(let m=0;m<12;m++){let d=e[m];for(let y=0;y<12;y++){let x=t[y];ao(d,x,n,i);let v=n.distanceToSquared(i);if(v<g&&(g=v,c&&c.copy(n),l&&l.copy(i),v<u))return Math.sqrt(v)}}return Math.sqrt(g)}})();var qi=class{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){let e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}};var ph=class extends qi{constructor(){super(()=>new jt)}},un=new ph;var mh=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let e=[],t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}},Je=new mh;var Yi,sr,ir=[],lc=new qi(()=>new nt);function Op(s,e,t,n,i,r){Yi=lc.getPrimitive(),sr=lc.getPrimitive(),ir.push(Yi,sr),Je.setBuffer(s._roots[e]);let o=gh(0,s.geometry,t,n,i,r);Je.clearBuffer(),lc.releasePrimitive(Yi),lc.releasePrimitive(sr),ir.pop(),ir.pop();let a=ir.length;return a>0&&(sr=ir[a-1],Yi=ir[a-2]),o}function gh(s,e,t,n,i=null,r=0,o=0){let{float32Array:a,uint16Array:c,uint32Array:l}=Je,u=s*2;if(_t(u,c)){let h=Et(s,l),p=Ct(u,c);return ut(s,a,Yi),n(h,p,!1,o,r+s,Yi)}else{let E=function(N){let{uint16Array:B,uint32Array:L}=Je,O=N*2;for(;!_t(O,B);)N=Wt(N),O=N*2;return Et(N,L)},D=function(N){let{uint16Array:B,uint32Array:L}=Je,O=N*2;for(;!_t(O,B);)N=Xt(N,L),O=N*2;return Et(N,L)+Ct(O,B)},h=Wt(s),p=Xt(s,l),g=h,_=p,m,d,y,x;if(i&&(y=Yi,x=sr,ut(g,a,y),ut(_,a,x),m=i(y),d=i(x),d<m)){g=p,_=h;let N=m;m=d,d=N,y=x}y||(y=Yi,ut(g,a,y));let v=_t(g*2,c),S=t(y,v,m,o+1,r+g),b;if(S===2){let N=E(g),L=D(g)-N;b=n(N,L,!0,o+1,r+g,y)}else b=S&&gh(g,e,t,n,i,r,o+1);if(b)return!0;x=sr,ut(_,a,x);let T=_t(_*2,c),P=t(x,T,d,o+1,r+_),M;if(P===2){let N=E(_),L=D(_)-N;M=n(N,L,!0,o+1,r+_,x)}else M=P&&gh(_,e,t,n,i,r,o+1);return!!M}}var co=new w,_h=new w;function Fp(s,e,t={},n=0,i=1/0){let r=n*n,o=i*i,a=1/0,c=null;if(s.shapecast({boundsTraverseOrder:u=>(co.copy(e).clamp(u.min,u.max),co.distanceToSquared(e)),intersectsBounds:(u,f,h)=>h<a&&h<o,intersectsTriangle:(u,f)=>{u.closestPointToPoint(e,co);let h=e.distanceToSquared(co);return h<a&&(_h.copy(co),a=h,c=f),h<r}}),a===1/0)return null;let l=Math.sqrt(a);return t.point?t.point.copy(_h):t.point=_h.clone(),t.distance=l,t.faceIndex=c,t}var rr=new w,or=new w,ar=new w,uc=new re,hc=new re,fc=new re,Bp=new w,zp=new w,kp=new w,dc=new w;function zM(s,e,t,n,i,r,o,a){let c;if(r===Gt?c=s.intersectTriangle(n,t,e,!0,i):c=s.intersectTriangle(e,t,n,r!==gt,i),c===null)return null;let l=s.origin.distanceTo(i);return l<o||l>a?null:{distance:l,point:i.clone()}}function kM(s,e,t,n,i,r,o,a,c,l,u){rr.fromBufferAttribute(e,r),or.fromBufferAttribute(e,o),ar.fromBufferAttribute(e,a);let f=zM(s,rr,or,ar,dc,c,l,u);if(f){n&&(uc.fromBufferAttribute(n,r),hc.fromBufferAttribute(n,o),fc.fromBufferAttribute(n,a),f.uv=Mn.getInterpolation(dc,rr,or,ar,uc,hc,fc,new re)),i&&(uc.fromBufferAttribute(i,r),hc.fromBufferAttribute(i,o),fc.fromBufferAttribute(i,a),f.uv1=Mn.getInterpolation(dc,rr,or,ar,uc,hc,fc,new re)),t&&(Bp.fromBufferAttribute(t,r),zp.fromBufferAttribute(t,o),kp.fromBufferAttribute(t,a),f.normal=Mn.getInterpolation(dc,rr,or,ar,Bp,zp,kp,new w),f.normal.dot(s.direction)>0&&f.normal.multiplyScalar(-1));let h={a:r,b:o,c:a,normal:new w,materialIndex:0};Mn.getNormal(rr,or,ar,h.normal),f.face=h,f.faceIndex=r}return f}function cr(s,e,t,n,i,r,o){let a=n*3,c=a+0,l=a+1,u=a+2,f=s.index;s.index&&(c=f.getX(c),l=f.getX(l),u=f.getX(u));let{position:h,normal:p,uv:g,uv1:_}=s.attributes,m=kM(t,h,p,g,_,c,l,u,e,r,o);return m?(m.faceIndex=n,i&&i.push(m),m):null}function ht(s,e,t,n){let i=s.a,r=s.b,o=s.c,a=e,c=e+1,l=e+2;t&&(a=t.getX(a),c=t.getX(c),l=t.getX(l)),i.x=n.getX(a),i.y=n.getY(a),i.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function Hp(s,e,t,n,i,r,o,a){let{geometry:c,_indirectBuffer:l}=s;for(let u=n,f=n+i;u<f;u++)cr(c,e,t,u,r,o,a)}function Vp(s,e,t,n,i,r,o){let{geometry:a,_indirectBuffer:c}=s,l=1/0,u=null;for(let f=n,h=n+i;f<h;f++){let p;p=cr(a,e,t,f,null,r,o),p&&p.distance<l&&(u=p,l=p.distance)}return u}function Gp(s,e,t,n,i,r,o){let{geometry:a}=t,{index:c}=a,l=a.attributes.position;for(let u=s,f=e+s;u<f;u++){let h;if(h=u,ht(o,h*3,c,l),o.needsUpdate=!0,n(o,h,i,r))return!0}return!1}function Wp(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position,r,o,a,c,l=0,u=s._roots;for(let h=0,p=u.length;h<p;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,p,g=!1){let _=h*2;if(a[_+15]===65535){let d=o[h+6],y=a[_+14],x=1/0,v=1/0,S=1/0,b=-1/0,T=-1/0,P=-1/0;for(let M=3*d,E=3*(d+y);M<E;M++){let D=n[M],N=i.getX(D),B=i.getY(D),L=i.getZ(D);N<x&&(x=N),N>b&&(b=N),B<v&&(v=B),B>T&&(T=B),L<S&&(S=L),L>P&&(P=L)}return c[h+0]!==x||c[h+1]!==v||c[h+2]!==S||c[h+3]!==b||c[h+4]!==T||c[h+5]!==P?(c[h+0]=x,c[h+1]=v,c[h+2]=S,c[h+3]=b,c[h+4]=T,c[h+5]=P,!0):!1}else{let d=h+8,y=o[h+6],x=d+p,v=y+p,S=g,b=!1,T=!1;e?S||(b=e.has(x),T=e.has(v),S=!b&&!T):(b=!0,T=!0);let P=S||b,M=S||T,E=!1;P&&(E=f(d,p,S));let D=!1;M&&(D=f(y,p,S));let N=E||D;if(N)for(let B=0;B<3;B++){let L=d+B,O=y+B,H=c[L],j=c[L+3],Y=c[O],W=c[O+3];c[h+B]=H<Y?H:Y,c[h+B+3]=j>W?j:W}return N}}}function Un(s,e,t,n,i){let r,o,a,c,l,u,f=1/t.direction.x,h=1/t.direction.y,p=1/t.direction.z,g=t.origin.x,_=t.origin.y,m=t.origin.z,d=e[s],y=e[s+3],x=e[s+1],v=e[s+3+1],S=e[s+2],b=e[s+3+2];return f>=0?(r=(d-g)*f,o=(y-g)*f):(r=(y-g)*f,o=(d-g)*f),h>=0?(a=(x-_)*h,c=(v-_)*h):(a=(v-_)*h,c=(x-_)*h),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),p>=0?(l=(S-m)*p,u=(b-m)*p):(l=(b-m)*p,u=(S-m)*p),r>u||l>o)?!1:((l>r||r!==r)&&(r=l),(u<o||o!==o)&&(o=u),r<=i&&o>=n)}function Xp(s,e,t,n,i,r,o,a){let{geometry:c,_indirectBuffer:l}=s;for(let u=n,f=n+i;u<f;u++){let h=l?l[u]:u;cr(c,e,t,h,r,o,a)}}function qp(s,e,t,n,i,r,o){let{geometry:a,_indirectBuffer:c}=s,l=1/0,u=null;for(let f=n,h=n+i;f<h;f++){let p;p=cr(a,e,t,c?c[f]:f,null,r,o),p&&p.distance<l&&(u=p,l=p.distance)}return u}function Yp(s,e,t,n,i,r,o){let{geometry:a}=t,{index:c}=a,l=a.attributes.position;for(let u=s,f=e+s;u<f;u++){let h;if(h=t.resolveTriangleIndex(u),ht(o,h*3,c,l),o.needsUpdate=!0,n(o,h,i,r))return!0}return!1}function jp(s,e,t,n,i,r,o){Je.setBuffer(s._roots[e]),yh(0,s,t,n,i,r,o),Je.clearBuffer()}function yh(s,e,t,n,i,r,o){let{float32Array:a,uint16Array:c,uint32Array:l}=Je,u=s*2;if(_t(u,c)){let h=Et(s,l),p=Ct(u,c);Hp(e,t,n,h,p,i,r,o)}else{let h=Wt(s);Un(h,a,n,r,o)&&yh(h,e,t,n,i,r,o);let p=Xt(s,l);Un(p,a,n,r,o)&&yh(p,e,t,n,i,r,o)}}var HM=["x","y","z"];function Zp(s,e,t,n,i,r){Je.setBuffer(s._roots[e]);let o=vh(0,s,t,n,i,r);return Je.clearBuffer(),o}function vh(s,e,t,n,i,r){let{float32Array:o,uint16Array:a,uint32Array:c}=Je,l=s*2;if(_t(l,a)){let f=Et(s,c),h=Ct(l,a);return Vp(e,t,n,f,h,i,r)}else{let f=rc(s,c),h=HM[f],g=n.direction[h]>=0,_,m;g?(_=Wt(s),m=Xt(s,c)):(_=Xt(s,c),m=Wt(s));let y=Un(_,o,n,i,r)?vh(_,e,t,n,i,r):null;if(y){let S=y.point[h];if(g?S<=o[m+f]:S>=o[m+f+3])return y}let v=Un(m,o,n,i,r)?vh(m,e,t,n,i,r):null;return y&&v?y.distance<=v.distance?y:v:y||v||null}}var pc=new nt,lr=new jt,ur=new jt,lo=new Se,$p=new bt,mc=new bt;function Kp(s,e,t,n){Je.setBuffer(s._roots[e]);let i=Mh(0,s,t,n);return Je.clearBuffer(),i}function Mh(s,e,t,n,i=null){let{float32Array:r,uint16Array:o,uint32Array:a}=Je,c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),$p.set(t.boundingBox.min,t.boundingBox.max,n),i=$p),_t(c,o)){let u=e.geometry,f=u.index,h=u.attributes.position,p=t.index,g=t.attributes.position,_=Et(s,a),m=Ct(c,o);if(lo.copy(n).invert(),t.boundsTree)return ut(s,r,mc),mc.matrix.copy(lo),mc.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>mc.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let x=_*3,v=(m+_)*3;x<v;x+=3)if(ht(ur,x,f,h),ur.needsUpdate=!0,y.intersectsTriangle(ur))return!0;return!1}});for(let d=_*3,y=(m+_)*3;d<y;d+=3){ht(lr,d,f,h),lr.a.applyMatrix4(lo),lr.b.applyMatrix4(lo),lr.c.applyMatrix4(lo),lr.needsUpdate=!0;for(let x=0,v=p.count;x<v;x+=3)if(ht(ur,x,p,g),ur.needsUpdate=!0,lr.intersectsTriangle(ur))return!0}}else{let u=s+8,f=a[s+6];return ut(u,r,pc),!!(i.intersectsBox(pc)&&Mh(u,e,t,n,i)||(ut(f,r,pc),i.intersectsBox(pc)&&Mh(f,e,t,n,i)))}}var gc=new Se,bh=new bt,uo=new bt,VM=new w,GM=new w,WM=new w,XM=new w;function Jp(s,e,t,n={},i={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),bh.set(e.boundingBox.min,e.boundingBox.max,t),bh.needsUpdate=!0;let a=s.geometry,c=a.attributes.position,l=a.index,u=e.attributes.position,f=e.index,h=un.getPrimitive(),p=un.getPrimitive(),g=VM,_=GM,m=null,d=null;i&&(m=WM,d=XM);let y=1/0,x=null,v=null;return gc.copy(t).invert(),uo.matrix.copy(gc),s.shapecast({boundsTraverseOrder:S=>bh.distanceToBox(S),intersectsBounds:(S,b,T)=>T<y&&T<o?(b&&(uo.min.copy(S.min),uo.max.copy(S.max),uo.needsUpdate=!0),!0):!1,intersectsRange:(S,b)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:P=>uo.distanceToBox(P),intersectsBounds:(P,M,E)=>E<y&&E<o,intersectsRange:(P,M)=>{for(let E=P,D=P+M;E<D;E++){ht(p,3*E,f,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let N=S,B=S+b;N<B;N++){ht(h,3*N,l,c),h.needsUpdate=!0;let L=h.distanceToTriangle(p,g,m);if(L<y&&(_.copy(g),d&&d.copy(m),y=L,x=N,v=E),L<r)return!0}}}});{let T=ci(e);for(let P=0,M=T;P<M;P++){ht(p,3*P,f,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let E=S,D=S+b;E<D;E++){ht(h,3*E,l,c),h.needsUpdate=!0;let N=h.distanceToTriangle(p,g,m);if(N<y&&(_.copy(g),d&&d.copy(m),y=N,x=E,v=P),N<r)return!0}}}}}),un.releasePrimitive(h),un.releasePrimitive(p),y===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=y,n.faceIndex=x,i&&(i.point?i.point.copy(d):i.point=d.clone(),i.point.applyMatrix4(gc),_.applyMatrix4(gc),i.distance=_.sub(i.point).length(),i.faceIndex=v),n)}function Qp(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));let t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position,r,o,a,c,l=0,u=s._roots;for(let h=0,p=u.length;h<p;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,p,g=!1){let _=h*2;if(a[_+15]===65535){let d=o[h+6],y=a[_+14],x=1/0,v=1/0,S=1/0,b=-1/0,T=-1/0,P=-1/0;for(let M=d,E=d+y;M<E;M++){let D=3*s.resolveTriangleIndex(M);for(let N=0;N<3;N++){let B=D+N;B=n?n[B]:B;let L=i.getX(B),O=i.getY(B),H=i.getZ(B);L<x&&(x=L),L>b&&(b=L),O<v&&(v=O),O>T&&(T=O),H<S&&(S=H),H>P&&(P=H)}}return c[h+0]!==x||c[h+1]!==v||c[h+2]!==S||c[h+3]!==b||c[h+4]!==T||c[h+5]!==P?(c[h+0]=x,c[h+1]=v,c[h+2]=S,c[h+3]=b,c[h+4]=T,c[h+5]=P,!0):!1}else{let d=h+8,y=o[h+6],x=d+p,v=y+p,S=g,b=!1,T=!1;e?S||(b=e.has(x),T=e.has(v),S=!b&&!T):(b=!0,T=!0);let P=S||b,M=S||T,E=!1;P&&(E=f(d,p,S));let D=!1;M&&(D=f(y,p,S));let N=E||D;if(N)for(let B=0;B<3;B++){let L=d+B,O=y+B,H=c[L],j=c[L+3],Y=c[O],W=c[O+3];c[h+B]=H<Y?H:Y,c[h+B+3]=j>W?j:W}return N}}}function em(s,e,t,n,i,r,o){Je.setBuffer(s._roots[e]),Sh(0,s,t,n,i,r,o),Je.clearBuffer()}function Sh(s,e,t,n,i,r,o){let{float32Array:a,uint16Array:c,uint32Array:l}=Je,u=s*2;if(_t(u,c)){let h=Et(s,l),p=Ct(u,c);Xp(e,t,n,h,p,i,r,o)}else{let h=Wt(s);Un(h,a,n,r,o)&&Sh(h,e,t,n,i,r,o);let p=Xt(s,l);Un(p,a,n,r,o)&&Sh(p,e,t,n,i,r,o)}}var qM=["x","y","z"];function tm(s,e,t,n,i,r){Je.setBuffer(s._roots[e]);let o=Th(0,s,t,n,i,r);return Je.clearBuffer(),o}function Th(s,e,t,n,i,r){let{float32Array:o,uint16Array:a,uint32Array:c}=Je,l=s*2;if(_t(l,a)){let f=Et(s,c),h=Ct(l,a);return qp(e,t,n,f,h,i,r)}else{let f=rc(s,c),h=qM[f],g=n.direction[h]>=0,_,m;g?(_=Wt(s),m=Xt(s,c)):(_=Xt(s,c),m=Wt(s));let y=Un(_,o,n,i,r)?Th(_,e,t,n,i,r):null;if(y){let S=y.point[h];if(g?S<=o[m+f]:S>=o[m+f+3])return y}let v=Un(m,o,n,i,r)?Th(m,e,t,n,i,r):null;return y&&v?y.distance<=v.distance?y:v:y||v||null}}var xc=new nt,hr=new jt,fr=new jt,ho=new Se,nm=new bt,_c=new bt;function im(s,e,t,n){Je.setBuffer(s._roots[e]);let i=Eh(0,s,t,n);return Je.clearBuffer(),i}function Eh(s,e,t,n,i=null){let{float32Array:r,uint16Array:o,uint32Array:a}=Je,c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),nm.set(t.boundingBox.min,t.boundingBox.max,n),i=nm),_t(c,o)){let u=e.geometry,f=u.index,h=u.attributes.position,p=t.index,g=t.attributes.position,_=Et(s,a),m=Ct(c,o);if(ho.copy(n).invert(),t.boundsTree)return ut(s,r,_c),_c.matrix.copy(ho),_c.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>_c.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let x=_,v=m+_;x<v;x++)if(ht(fr,3*e.resolveTriangleIndex(x),f,h),fr.needsUpdate=!0,y.intersectsTriangle(fr))return!0;return!1}});for(let d=_,y=m+_;d<y;d++){let x=e.resolveTriangleIndex(d);ht(hr,3*x,f,h),hr.a.applyMatrix4(ho),hr.b.applyMatrix4(ho),hr.c.applyMatrix4(ho),hr.needsUpdate=!0;for(let v=0,S=p.count;v<S;v+=3)if(ht(fr,v,p,g),fr.needsUpdate=!0,hr.intersectsTriangle(fr))return!0}}else{let u=s+8,f=a[s+6];return ut(u,r,xc),!!(i.intersectsBox(xc)&&Eh(u,e,t,n,i)||(ut(f,r,xc),i.intersectsBox(xc)&&Eh(f,e,t,n,i)))}}var yc=new Se,Ah=new bt,fo=new bt,YM=new w,jM=new w,ZM=new w,$M=new w;function sm(s,e,t,n={},i={},r=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Ah.set(e.boundingBox.min,e.boundingBox.max,t),Ah.needsUpdate=!0;let a=s.geometry,c=a.attributes.position,l=a.index,u=e.attributes.position,f=e.index,h=un.getPrimitive(),p=un.getPrimitive(),g=YM,_=jM,m=null,d=null;i&&(m=ZM,d=$M);let y=1/0,x=null,v=null;return yc.copy(t).invert(),fo.matrix.copy(yc),s.shapecast({boundsTraverseOrder:S=>Ah.distanceToBox(S),intersectsBounds:(S,b,T)=>T<y&&T<o?(b&&(fo.min.copy(S.min),fo.max.copy(S.max),fo.needsUpdate=!0),!0):!1,intersectsRange:(S,b)=>{if(e.boundsTree){let T=e.boundsTree;return T.shapecast({boundsTraverseOrder:P=>fo.distanceToBox(P),intersectsBounds:(P,M,E)=>E<y&&E<o,intersectsRange:(P,M)=>{for(let E=P,D=P+M;E<D;E++){let N=T.resolveTriangleIndex(E);ht(p,3*N,f,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let B=S,L=S+b;B<L;B++){let O=s.resolveTriangleIndex(B);ht(h,3*O,l,c),h.needsUpdate=!0;let H=h.distanceToTriangle(p,g,m);if(H<y&&(_.copy(g),d&&d.copy(m),y=H,x=B,v=E),H<r)return!0}}}})}else{let T=ci(e);for(let P=0,M=T;P<M;P++){ht(p,3*P,f,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let E=S,D=S+b;E<D;E++){let N=s.resolveTriangleIndex(E);ht(h,3*N,l,c),h.needsUpdate=!0;let B=h.distanceToTriangle(p,g,m);if(B<y&&(_.copy(g),d&&d.copy(m),y=B,x=E,v=P),B<r)return!0}}}}}),un.releasePrimitive(h),un.releasePrimitive(p),y===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=y,n.faceIndex=x,i&&(i.point?i.point.copy(d):i.point=d.clone(),i.point.applyMatrix4(yc),_.applyMatrix4(yc),i.distance=_.sub(i.point).length(),i.faceIndex=v),n)}function rm(){return typeof SharedArrayBuffer<"u"}var po=new Je.constructor,vc=new Je.constructor,ji=new qi(()=>new nt),dr=new nt,pr=new nt,wh=new nt,Rh=new nt,Ch=!1;function om(s,e,t,n){if(Ch)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Ch=!0;let i=s._roots,r=e._roots,o,a=0,c=0,l=new Se().copy(t).invert();for(let u=0,f=i.length;u<f;u++){po.setBuffer(i[u]),c=0;let h=ji.getPrimitive();ut(0,po.float32Array,h),h.applyMatrix4(l);for(let p=0,g=r.length;p<g&&(vc.setBuffer(r[p]),o=jn(0,0,t,l,n,a,c,0,0,h),vc.clearBuffer(),c+=r[p].length,!o);p++);if(ji.releasePrimitive(h),po.clearBuffer(),a+=i[u].length,o)break}return Ch=!1,o}function jn(s,e,t,n,i,r=0,o=0,a=0,c=0,l=null,u=!1){let f,h;u?(f=vc,h=po):(f=po,h=vc);let p=f.float32Array,g=f.uint32Array,_=f.uint16Array,m=h.float32Array,d=h.uint32Array,y=h.uint16Array,x=s*2,v=e*2,S=_t(x,_),b=_t(v,y),T=!1;if(b&&S)u?T=i(Et(e,d),Ct(e*2,y),Et(s,g),Ct(s*2,_),c,o+e,a,r+s):T=i(Et(s,g),Ct(s*2,_),Et(e,d),Ct(e*2,y),a,r+s,c,o+e);else if(b){let P=ji.getPrimitive();ut(e,m,P),P.applyMatrix4(t);let M=Wt(s),E=Xt(s,g);ut(M,p,dr),ut(E,p,pr);let D=P.intersectsBox(dr),N=P.intersectsBox(pr);T=D&&jn(e,M,n,t,i,o,r,c,a+1,P,!u)||N&&jn(e,E,n,t,i,o,r,c,a+1,P,!u),ji.releasePrimitive(P)}else{let P=Wt(e),M=Xt(e,d);ut(P,m,wh),ut(M,m,Rh);let E=l.intersectsBox(wh),D=l.intersectsBox(Rh);if(E&&D)T=jn(s,P,t,n,i,r,o,a,c+1,l,u)||jn(s,M,t,n,i,r,o,a,c+1,l,u);else if(E)if(S)T=jn(s,P,t,n,i,r,o,a,c+1,l,u);else{let N=ji.getPrimitive();N.copy(wh).applyMatrix4(t);let B=Wt(s),L=Xt(s,g);ut(B,p,dr),ut(L,p,pr);let O=N.intersectsBox(dr),H=N.intersectsBox(pr);T=O&&jn(P,B,n,t,i,o,r,c,a+1,N,!u)||H&&jn(P,L,n,t,i,o,r,c,a+1,N,!u),ji.releasePrimitive(N)}else if(D)if(S)T=jn(s,M,t,n,i,r,o,a,c+1,l,u);else{let N=ji.getPrimitive();N.copy(Rh).applyMatrix4(t);let B=Wt(s),L=Xt(s,g);ut(B,p,dr),ut(L,p,pr);let O=N.intersectsBox(dr),H=N.intersectsBox(pr);T=O&&jn(M,B,n,t,i,o,r,c,a+1,N,!u)||H&&jn(M,L,n,t,i,o,r,c,a+1,N,!u),ji.releasePrimitive(N)}}return T}var Mc=new bt,am=new nt,KM={strategy:0,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null},mo=class s{static serialize(e,t={}){t={cloneBuffers:!0,...t};let n=e.geometry,i=e._roots,r=e._indirectBuffer,o=n.getIndex(),a;return t.cloneBuffers?a={roots:i.map(c=>c.slice()),index:o?o.array.slice():null,indirectBuffer:r?r.slice():null}:a={roots:i,index:o?o.array:null,indirectBuffer:r},a}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};let{index:i,roots:r,indirectBuffer:o}=e,a=new s(t,{...n,[nc]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){let c=t.getIndex();if(c===null){let l=new st(e.index,1,!1);t.setIndex(l)}else c.array!==i&&(c.array.set(i),c.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...KM,[nc]:!1},t),t.useSharedArrayBuffer&&!rm())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[nc]||(Np(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new nt))),this.resolveTriangleIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n}refit(e=null){return(this.indirect?Qp:Wp)(this,e)}traverse(e,t=0){let n=this._roots[t],i=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,c=0){let l=a*2,u=r[l+15]===65535;if(u){let f=i[a+6],h=r[l+14];e(c,u,new Float32Array(n,a*4,6),f,h)}else{let f=a+32/4,h=i[a+6],p=i[a+7];e(c,u,new Float32Array(n,a*4,6),p)||(o(f,c+1),o(h,c+1))}}}raycast(e,t=bn,n=0,i=1/0){let r=this._roots,o=this.geometry,a=[],c=t.isMaterial,l=Array.isArray(t),u=o.groups,f=c?t.side:t,h=this.indirect?em:jp;for(let p=0,g=r.length;p<g;p++){let _=l?t[u[p].materialIndex].side:f,m=a.length;if(h(this,p,_,e,a,n,i),l){let d=u[p].materialIndex;for(let y=m,x=a.length;y<x;y++)a[y].face.materialIndex=d}}return a}raycastFirst(e,t=bn,n=0,i=1/0){let r=this._roots,o=this.geometry,a=t.isMaterial,c=Array.isArray(t),l=null,u=o.groups,f=a?t.side:t,h=this.indirect?tm:Zp;for(let p=0,g=r.length;p<g;p++){let _=c?t[u[p].materialIndex].side:f,m=h(this,p,_,e,n,i);m!=null&&(l==null||m.distance<l.distance)&&(l=m,c&&(m.face.materialIndex=u[p].materialIndex))}return l}intersectsGeometry(e,t){let n=!1,i=this._roots,r=this.indirect?im:Kp;for(let o=0,a=i.length;o<a&&(n=r(this,o,e,t),!n);o++);return n}shapecast(e){let t=un.getPrimitive(),n=this.indirect?Yp:Gp,{boundsTraverseOrder:i,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=e;if(o&&a){let f=o;o=(h,p,g,_,m)=>f(h,p,g,_,m)?!0:n(h,p,this,a,g,_,t)}else o||(a?o=(f,h,p,g)=>n(f,h,this,a,p,g,t):o=(f,h,p)=>p);let c=!1,l=0,u=this._roots;for(let f=0,h=u.length;f<h;f++){let p=u[f];if(c=Op(this,f,r,o,i,l),c)break;l+=p.byteLength}return un.releasePrimitive(t),c}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:r}=n,o=un.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{let _=this.resolveTriangleIndex(g);ht(o,_*3,a,c)}:g=>{ht(o,g*3,a,c)},u=un.getPrimitive(),f=e.geometry.index,h=e.geometry.attributes.position,p=e.indirect?g=>{let _=e.resolveTriangleIndex(g);ht(u,_*3,f,h)}:g=>{ht(u,g*3,f,h)};if(r){let g=(_,m,d,y,x,v,S,b)=>{for(let T=d,P=d+y;T<P;T++){p(T),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let M=_,E=_+m;M<E;M++)if(l(M),o.needsUpdate=!0,r(o,u,M,T,x,v,S,b))return!0}return!1};if(i){let _=i;i=function(m,d,y,x,v,S,b,T){return _(m,d,y,x,v,S,b,T)?!0:g(m,d,y,x,v,S,b,T)}}else i=g}return om(this,e,t,i)}intersectsBox(e,t){return Mc.set(e.min,e.max,t),Mc.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Mc.intersectsBox(n),intersectsTriangle:n=>Mc.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},r=0,o=1/0){return(this.indirect?sm:Jp)(this,e,t,n,i,r,o)}closestPointToPoint(e,t={},n=0,i=1/0){return Fp(this,e,t,n,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{ut(0,new Float32Array(n),am),e.union(am)}),e}};var cm=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`;var lm=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`;var vA=`
	${cm}
	${lm}
`;var Dc=[{id:"1",es:"Esqueleto",on:!0},{id:"3",es:"Articulaciones, ligamentos y c\xE1psulas",on:!1},{id:"4",es:"M\xFAsculos y tejido conectivo",on:!0},{id:"2",es:"Or\xEDgenes e inserciones musculares",on:!1},{id:"5",es:"Sistema cardiovascular",on:!1},{id:"6",es:"Sistema linf\xE1tico",on:!1},{id:"7",es:"Sistema nervioso y \xF3rganos de los sentidos",on:!1},{id:"8",es:"\xD3rganos (v\xEDsceras)",on:!1},{id:"9",es:"Piel (regiones cut\xE1neas)",on:!1}],Nc={Huesos:15129795,Cart\u00EDlagos:10273747,Dientes:16184296,Origen:15759951,Inserci\u00F3n:5211862,"Ligamentos y membranas":14144196,"C\xE1psulas articulares":11781327,"Discos, meniscos y cart\xEDlagos":9287624,"Otras estructuras articulares":13090473,M\u00FAsculos:11880509,"Fascias y aponeurosis":14469542,"Bursas sinoviales":9684190,"Vainas tendinosas":12375004,Tendones:15262156,Arterias:13378608,Venas:3037368,Coraz\u00F3n:11022392,"Ganglios linf\xE1ticos":7060823,"\xD3rganos linfoides":8232506,"Vasos linf\xE1ticos superficiales":10215546,"Vasos linf\xE1ticos profundos":4763722,"Troncos y conductos linf\xE1ticos":2067004,"Sistema nervioso central":15321529,"Sistema nervioso perif\xE9rico":15844419,"\xD3rganos de los sentidos":13807747,Digestivo:13601384,Respiratorio:15180714,Urinario:12548684,Genital:13011618,Endocrino:10120384,"Piel (regiones)":15053976},QM=new Set(["Fascias y aponeurosis","Bursas sinoviales","Vainas tendinosas"]),wc={sel:57599,nerve:16765952,muscle:16726815,skinFull:3111935,skinPart:10470399},Ai={},Nh={},go=null,ps=[],tn=[],Pt={},Uh={},bc={},yr={},ms={},Rc={},ui=new Set,wi=null,xo=!1,Oh="A",Qe=[],Fn=null,gr={nerve:!0,muscle:!0,skin:!0},Hh=[],Ie=s=>document.querySelector(s),An=s=>Nh[s]||s,Qn=Ie("#c"),et=new Hr({canvas:Qn,antialias:!0,alpha:!0,preserveDrawingBuffer:!1});et.setClearColor(0,0);var BA=matchMedia("(max-width: 760px), (pointer: coarse) and (max-height: 520px)").matches,Vh=matchMedia("(pointer: coarse)").matches;et.setPixelRatio(Math.min(window.devicePixelRatio,Vh?1.5:2));et.outputColorSpace=at;et.toneMapping=$r;et.toneMappingExposure=1;var en=new Xs,Bt=new Lt(35,1,.005,50),hi=new Wa(Bt,Qn);hi.enableDamping=!0;hi.dampingFactor=.12;hi.zoomSpeed=1.2;hi.screenSpacePanning=!0;en.add(new Ia(16777215,3816008,.7));{let s=new Gs(et);en.environment=s.fromScene(new ja(et),.04).texture,s.dispose()}var mm=new ls(16777215,1.9);Bt.add(mm);mm.position.set(.5,1,.8);var gm=new ls(16777215,.5);Bt.add(gm);gm.position.set(-1,-.3,-.5);en.add(Bt);var To=new Ln;en.add(To);function Gh(){let s=Qn.clientWidth,e=Qn.clientHeight;et.setSize(s,e,!1),Bt.aspect=s/e,Bt.updateProjectionMatrix(),typeof Zn<"u"&&Zn&&Zn.setSize(s,e),nn=!0}window.addEventListener("resize",Gh);function xm(){let s=document.documentElement.dataset.theme==="dark"||!document.documentElement.dataset.theme&&matchMedia("(prefers-color-scheme: dark)").matches;en.background=null}xm();matchMedia("(prefers-color-scheme: dark)").addEventListener("change",xm);var Sc={};function Kn(s,e,t=1){let n=s+"|"+e+"|"+t;if(Sc[n])return Sc[n];let i,r=Nc[e]??13421772,o={roughness:.62,metalness:0,side:gt};return(e&&e.startsWith("Vasos linf")||e==="Troncos y conductos linf\xE1ticos")&&(s==="normal"||s==="sel")?Sc[n]=ib(e,s):(s==="normal"&&e==="M\xFAsculos"?i=_m(new Ft({...o,roughness:.5,color:nb,envMapIntensity:.4,transparent:t<1,opacity:t,depthWrite:t>=1})):s==="normal"?(i=new Ft({...o,color:r,transparent:t<1,opacity:t,depthWrite:t>=1}),e==="Piel (regiones)"&&(i.transparent=!0,i.opacity=Math.min(t,.55),i.depthWrite=!1)):s==="ghost"?i=new Ft({...o,color:r,transparent:!0,opacity:.07,depthWrite:!1}):(i=new Ft({...o,color:wc[s],emissive:wc[s],emissiveIntensity:s==="sel"?.35:.45}),s==="skinFull"&&(i.transparent=!0,i.opacity=.5,i.depthWrite=!1),s==="skinPart"&&(i.transparent=!0,i.opacity=.28,i.depthWrite=!1),s==="nerve"&&(i.depthTest=!1,i.transparent=!0,i.opacity=.95)),Sc[n]=i)}var eb=`
attribute vec3 fiber; attribute vec2 fuv; attribute float tend;
varying vec3 vFibW; varying vec3 vPosW; varying vec3 vNrmW; varying vec2 vFuv; varying float vTend;
`,tb=`
varying vec3 vFibW; varying vec3 vPosW; varying vec3 vNrmW; varying vec2 vFuv; varying float vTend;
float fbHash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float fbNoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
  return mix(mix(fbHash(i), fbHash(i+vec2(1,0)), f.x), mix(fbHash(i+vec2(0,1)), fbHash(i+vec2(1,1)), f.x), f.y); }
`;function _m(s){return s.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
`+eb).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
        vPosW = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vFibW = mat3(modelMatrix) * fiber;
        vNrmW = normalize(mat3(modelMatrix) * objectNormal); vFuv = fuv; vTend = tend;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
`+tb).replace("#include <color_fragment>",`#include <color_fragment>
        float fbAmp = 0.0, fbG = 0.0; vec3 fbBW = vec3(0.0);
        if (dot(vFibW, vFibW) > 1e-4) {
          vec3 nW = normalize(vNrmW) * (gl_FrontFacing ? 1.0 : -1.0);
          vec3 tW = normalize(vFibW - nW * dot(vFibW, nW));
          fbBW = cross(nW, tW);
          float u = vFuv.x, v = vFuv.y;
          // dos escalas: fasc\xEDculos (~3 mm) y fibras (~1 mm), alargadas a lo largo de la fibra
          vec2 q1 = vec2(u * 14.0, v * 330.0), q2 = vec2(u * 40.0, v * 950.0);
          float w1 = fwidth(q1.y), w2 = fwidth(q2.y);
          float a1 = clamp(1.0 - (w1 - 0.35) / 0.6, 0.0, 1.0), a2 = clamp(1.0 - (w2 - 0.35) / 0.6, 0.0, 1.0);
          float n1 = fbNoise(q1), n2 = fbNoise(q2);
          float d1 = fbNoise(q1 + vec2(0.0, 0.35)) - n1, d2 = fbNoise(q2 + vec2(0.0, 0.35)) - n2;
          float shade = a1 * (n1 - 0.5) * 0.30 + a2 * (n2 - 0.5) * 0.16;
          vec3 belly = diffuseColor.rgb * (1.0 + shade);
          // tend\xF3n / aponeurosis: blanco nacarado con estr\xEDa fina y longitudinal
          float nt = fbNoise(vec2(u * 30.0, v * 1400.0)); float at = clamp(1.0 - (fwidth(v * 1400.0) - 0.35) / 0.6, 0.0, 1.0);
          vec3 tendonC = vec3(0.80, 0.75, 0.62) * (1.0 + at * (nt - 0.5) * 0.12 + a1 * (n1 - 0.5) * 0.05);
          float tb = smoothstep(0.25, 0.75, vTend);
          diffuseColor.rgb = mix(belly, tendonC, tb);
          fbG = (a1 * d1 * 1.1 + a2 * d2 * 0.6) * (1.0 - 0.7 * tb); fbAmp = max(a1, a2);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor = mix(roughnessFactor, 0.3, smoothstep(0.25, 0.75, vTend));`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        if (fbAmp > 0.0) { vec3 bV = normalize((viewMatrix * vec4(fbBW, 0.0)).xyz); normal = normalize(normal - bV * fbG * 0.9); }`)},s.customProgramCacheKey=()=>"fiber4",s}var nb=10104615;function ym(){if(!Pt[4]||!Pt[2])return;let s={},e=new w;for(let n of Pt[2]){let i=n.userData.m,r=i.ins==="Origen"?"O":i.ins==="Inserci\xF3n"?"I":null;if(!r)continue;let o=i.b+"|"+i.s,a=s[o]||={O:[],I:[]},c=n.geometry.attributes.position,l=Math.max(1,Math.floor(c.count/24));n.updateMatrixWorld();for(let u=0;u<c.count;u+=l)e.fromBufferAttribute(c,u).applyMatrix4(n.matrixWorld),a[r].push(e.x,e.y,e.z)}let t=(n,i,r,o)=>{let a=1/0,c=0;for(let l=0;l<n.length;l+=3){let u=(n[l]-i)**2+(n[l+1]-r)**2+(n[l+2]-o)**2;u<a&&(a=u,c=l)}return c};for(let n of Pt[4]){let i=n.userData.m;if(i.g!=="M\xFAsculos"||n.geometry.attributes.fiber)continue;let r=[i.b,...i.chain.slice(0,2)].map(d=>s[d+"|"+i.s]).find(d=>d&&d.O.length&&d.I.length),o=n.geometry.attributes.position,a=o.count,c=new Float32Array(a*3);n.updateMatrixWorld();let l=new We().setFromMatrix4(n.matrixWorld).invert();if(r)for(let d=0;d<a;d++){e.fromBufferAttribute(o,d).applyMatrix4(n.matrixWorld);let y=t(r.O,e.x,e.y,e.z),x=t(r.I,e.x,e.y,e.z),v=new w(r.I[x]-r.O[y],r.I[x+1]-r.O[y+1],r.I[x+2]-r.O[y+2]).applyMatrix3(l).normalize();c[3*d]=v.x,c[3*d+1]=v.y,c[3*d+2]=v.z}else{let d=new w;for(let v=0;v<a;v++)d.add(e.fromBufferAttribute(o,v));d.divideScalar(a);let y=[0,0,0,0,0,0];for(let v=0;v<a;v++)e.fromBufferAttribute(o,v).sub(d),y[0]+=e.x*e.x,y[1]+=e.x*e.y,y[2]+=e.x*e.z,y[3]+=e.y*e.y,y[4]+=e.y*e.z,y[5]+=e.z*e.z;let x=new w(1,1,1).normalize();for(let v=0;v<30;v++)x=new w(y[0]*x.x+y[1]*x.y+y[2]*x.z,y[1]*x.x+y[3]*x.y+y[4]*x.z,y[2]*x.x+y[4]*x.y+y[5]*x.z).normalize();for(let v=0;v<a;v++)c[3*v]=x.x,c[3*v+1]=x.y,c[3*v+2]=x.z}let u=n.geometry.index;if(u)for(let d=0;d<4;d++){let y=new Float32Array(c),x=u.array;for(let v=0;v<x.length;v+=3)for(let S=0;S<3;S++){let b=x[v+S],T=x[v+(S+1)%3],P=c[3*b]*c[3*T]+c[3*b+1]*c[3*T+1]+c[3*b+2]*c[3*T+2]<0?-1:1;y[3*b]+=P*c[3*T],y[3*b+1]+=P*c[3*T+1],y[3*b+2]+=P*c[3*T+2],y[3*T]+=P*c[3*b],y[3*T+1]+=P*c[3*b+1],y[3*T+2]+=P*c[3*b+2]}for(let v=0;v<a;v++){let S=Math.hypot(y[3*v],y[3*v+1],y[3*v+2])||1;c[3*v]=y[3*v]/S,c[3*v+1]=y[3*v+1]/S,c[3*v+2]=y[3*v+2]/S}}let f=n.geometry.attributes.normal,h=new Float32Array(a*2),p=new w;for(let d=0;d<a;d++)p.add(e.fromBufferAttribute(o,d));p.divideScalar(a);let g=new w,_=new w,m=new w;for(let d=0;d<a;d++)e.fromBufferAttribute(o,d).sub(p),g.set(c[3*d],c[3*d+1],c[3*d+2]),f?(_.fromBufferAttribute(f,d),m.crossVectors(_,g),m.lengthSq()<1e-8&&m.set(g.y,-g.x,0),m.normalize()):m.set(g.y,-g.x,0).normalize(),h[2*d]=e.dot(g),h[2*d+1]=e.dot(m);n.geometry.setAttribute("fuv",new st(h,2)),n.geometry.setAttribute("fiber",new st(c,3))}nn=!0}var _o=[],Uc={value:0},yo=!1;function ib(s,e){let t=new Ft({color:e==="sel"?wc.sel:Nc[s],roughness:.35,envMapIntensity:.6,emissive:e==="sel"?wc.sel:0,emissiveIntensity:.35});return t.onBeforeCompile=n=>{n.uniforms.uFlow=Uc,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying float vLen;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vLen = uv.x;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying float vLen; uniform float uFlow;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        if (uFlow > 0.0) { float ph = fract(vLen / 0.07 - uFlow * 0.9); float pulse = smoothstep(0.0, 0.15, ph) * (1.0 - smoothstep(0.15, 0.45, ph));
          totalEmissiveRadiance += vec3(0.75, 1.0, 0.55) * pulse * 0.9; }`)},t.customProgramCacheKey=()=>"lymph1",t}function sb(){let s=[];return _o.forEach((e,t)=>{let n="L_"+t,i=e.pts.map(m=>new w(m[0],m[1],m[2]));if(i.length<2)return;let r=new Yr(i,!1,"centripetal"),o=r.getLength(),a=Math.max(8,Math.round(o/.004)),c=7,l=new Aa(r,a,e.r*1.4,c,!1),u=l.attributes.position,f=l.attributes.uv,h=new w,p=new w,g=e.g!=="Troncos y conductos linf\xE1ticos";for(let m=0;m<=a;m++){r.getPointAt(m/a,h);let d=m/a*o,y=g?1+.45*Math.max(0,Math.sin(d/.009*Math.PI*2))**3:1;for(let x=0;x<=c;x++){let v=m*(c+1)+x;p.fromBufferAttribute(u,v).sub(h).multiplyScalar(y).add(h),u.setXYZ(v,p.x,p.y,p.z),f.setX(v,d)}}l.computeVertexNormals(),l.computeBoundingSphere(),Ai[n]={n:e.b,b:e.b,s:e.s,sys:"6",g:e.g,chain:[e.g],d:e.d};let _=new $e(l,Kn("normal",e.g));_.name=n,_.userData.id=n,_.userData.m=Ai[n],To.add(_),s.push(_)}),s}var Cc=null;function rb(){let s={},e=new Gn,t=new w,n=new w;for(let i of Pt[4]||[]){if(i.userData.m.g!=="M\xFAsculos")continue;let o=i.geometry;o.boundsTree||(o.boundsTree=new mo(o));let a=o.attributes.position,c=o.attributes.normal,l=a.count,u=new Float32Array(l).fill(-1);for(let x=0;x<l;x++){t.fromBufferAttribute(a,x),n.fromBufferAttribute(c,x).normalize();let v=-1;for(let S of[-1,1]){e.origin.copy(t).addScaledVector(n,S*2e-4),e.direction.copy(n).multiplyScalar(S);let b=o.boundsTree.raycastFirst(e,gt);if(b&&b.distance>3e-4&&b.distance<.12){v=b.distance;break}}u[x]=v}let f=Array.from(u).filter(x=>x>0).sort((x,v)=>x-v);if(f.length<20)continue;let h=f[Math.floor(f.length*.9)];if(h<.007)continue;let p=new Float32Array(l),g=(x,v,S)=>{let b=Math.min(1,Math.max(0,(S-x)/(v-x)));return b*b*(3-2*b)};for(let x=0;x<l;x++){let v=u[x];if(v<0){p[x]=-1;continue}p[x]=(1-g(.22*h,.38*h,v))*(1-g(.006,.009,v))}let _=o.index?o.index.array:null;if(_)for(let x=0;x<5;x++){let v=new Float32Array(l),S=new Float32Array(l);for(let b=0;b<_.length;b+=3)for(let T=0;T<3;T++){let P=_[b+T],M=_[b+(T+1)%3];p[M]>=0&&(v[P]+=p[M],S[P]++),p[P]>=0&&(v[M]+=p[P],S[M]++)}for(let b=0;b<l;b++){let T=p[b]>=0?p[b]:0,P=p[b]>=0?1:0;S[b]+P&&(p[b]=(v[b]+T*2*P)/(S[b]+2*P))}}let m=new Uint8Array(l),d=0;for(let x=0;x<l;x++){let v=Math.max(0,Math.min(1,p[x]));m[x]=Math.round(v*255),m[x]>60&&d++}if(d<8)continue;let y="";for(let x=0;x<l;x++)y+=String.fromCharCode(m[x]);s[i.userData.id]={n:l,w:btoa(y)},o.boundsTree=null}return s}function ob(){if(!(!Cc||!Pt[4])){for(let s of Pt[4]){let e=Cc[s.userData.id],t=s.geometry;if(t.attributes.tend)continue;let n=t.attributes.position.count,i=new Float32Array(n);if(e&&e.n===n){let r=atob(e.w);for(let o=0;o<n;o++)i[o]=r.charCodeAt(o)/255}t.setAttribute("tend",new st(i,1))}nn=!0}}var li=null,um={O:16742938,I:1997823},Ph={};function vm(s,e){let t=s+(e?"c":"");return Ph[t]?Ph[t]:Ph[t]=new Ft({color:um[s],emissive:um[s],emissiveIntensity:e?.25:.4,roughness:.5,side:gt,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4,transparent:!!e,opacity:e?.85:1})}function ab(s){let e=s.geometry.attributes.position,t=e.count,n=new w;s.updateMatrixWorld();let i=new Float32Array(t*3),r=new w;for(let h=0;h<t;h++)n.fromBufferAttribute(e,h).applyMatrix4(s.matrixWorld),i[3*h]=n.x,i[3*h+1]=n.y,i[3*h+2]=n.z,r.add(n);r.divideScalar(t);let o=[0,0,0,0,0,0];for(let h=0;h<t;h++){let p=i[3*h]-r.x,g=i[3*h+1]-r.y,_=i[3*h+2]-r.z;o[0]+=p*p,o[1]+=p*g,o[2]+=p*_,o[3]+=g*g,o[4]+=g*_,o[5]+=_*_}let a=new w(.1,1,.1).normalize();for(let h=0;h<40;h++)a=new w(o[0]*a.x+o[1]*a.y+o[2]*a.z,o[1]*a.x+o[3]*a.y+o[4]*a.z,o[2]*a.x+o[4]*a.y+o[5]*a.z).normalize();a.y<0&&a.negate();let c=1/0,l=-1/0,u=new Float32Array(t);for(let h=0;h<t;h++){let p=(i[3*h]-r.x)*a.x+(i[3*h+1]-r.y)*a.y+(i[3*h+2]-r.z)*a.z;u[h]=p,c=Math.min(c,p),l=Math.max(l,p)}let f=new Float32Array(t);for(let h=0;h<t;h++)f[h]=(l-u[h])/Math.max(l-c,1e-6);return{P:i,t:f,n:t}}function cb(s,e,t){let{P:n,t:i,n:r}=ab(s),o=.006,a=new Map,c=.005**2,l=new nt;for(let d=0;d<r;d++){if(i[d]<e[0]||i[d]>e[1])continue;let y=Math.floor(n[3*d]/o)+","+Math.floor(n[3*d+1]/o)+","+Math.floor(n[3*d+2]/o);(a.get(y)||a.set(y,[]).get(y)).push(d),l.expandByPoint(new w(n[3*d],n[3*d+1],n[3*d+2]))}if(!a.size)return null;l.expandByScalar(.01);let u=(d,y,x)=>{let v=Math.floor(d/o),S=Math.floor(y/o),b=Math.floor(x/o);for(let T=-1;T<=1;T++)for(let P=-1;P<=1;P++)for(let M=-1;M<=1;M++){let E=a.get(v+T+","+(S+P)+","+(b+M));if(E)for(let D of E){let N=n[3*D]-d,B=n[3*D+1]-y,L=n[3*D+2]-x;if(N*N+B*B+L*L<c)return!0}}return!1},f=[],h=new Set,p=new w,g=new w,_=new w;for(let d of t){if(!new nt().setFromObject(d).intersectsBox(l))continue;let x=d.geometry,v=x.attributes.position,S=x.index;d.updateMatrixWorld();let b=0,T=S?S.count:v.count;for(let P=0;P<T;P+=3){let M=S?S.getX(P):P,E=S?S.getX(P+1):P+1,D=S?S.getX(P+2):P+2;p.fromBufferAttribute(v,M).applyMatrix4(d.matrixWorld),g.fromBufferAttribute(v,E).applyMatrix4(d.matrixWorld),_.fromBufferAttribute(v,D).applyMatrix4(d.matrixWorld),l.containsPoint(p)&&u(p.x,p.y,p.z)&&u(g.x,g.y,g.z)&&u(_.x,_.y,_.z)&&(f.push(p.x,p.y,p.z,g.x,g.y,g.z,_.x,_.y,_.z),b++)}b>3&&h.add(d.userData.m.b)}if(f.length<54)return null;let m=new Dt;return m.setAttribute("position",new Rt(f,3)),m.computeVertexNormals(),{geo:m,names:[...h]}}async function Mm(s){await Promise.all(["1","2","4"].map($n));let e=s.filter(a=>a.userData.m.sys==="4"&&a.userData.m.g==="M\xFAsculos");if(!e.length)return;li&&Mr(!0);let t=Pt[1].filter(a=>a.userData.m.g!=="Dientes"),n=new Set,i=[],r={O:new Map,I:new Map};for(let a of e){let c=a.userData.m,l=[c.b,c.chain[0]].filter(Boolean),u=Pt[2].filter(h=>h.userData.m.s===c.s&&l.includes(h.userData.m.b)),f={O:!1,I:!1};for(let h of u){let p=h.userData.m.ins==="Origen"?"O":"I";f[p]=!0,n.add(h),r[p].set(An(h.userData.m.chain[0]||"")||"\u2014",!1)}for(let[h,p]of[["O",[0,.4]],["I",[.85,1]]]){if(f[h])continue;let g=cb(a,p,t);if(!g)continue;let _=new $e(g.geo,vm(h,!0));_.renderOrder=3,To.add(_),i.push(_),g.names.forEach(m=>r[h].set(An(m),!0))}}li={muscles:new Set(e),marks:n,extra:i,rows:r,opaque:!1},Ze(),bm();let o=zt([...e,...n,...i]);o.expandByVector(o.getSize(new w).multiplyScalar(.25)),hn(o,new w(...e[0].userData.m.s==="D"?[-.35,.05,1]:[.35,.05,1]))}function Mr(s){li&&(li.extra.forEach(e=>{To.remove(e),e.geometry.dispose()}),li=null,s||(Ze(),ei()))}function lb(s){let e=s.userData.m,t=li;if(t.muscles.has(s)){s.visible=!0,s.material=Kn("normal","M\xFAsculos",t.opaque?1:.4),s.renderOrder=2;return}if(t.marks.has(s)){s.visible=!0,s.material=vm(e.ins==="Origen"?"O":"I"),s.renderOrder=3;return}if(e.sys==="1"){s.visible=ms[e.g]!==!1,s.material=Kn("normal",e.g,1),s.renderOrder=0;return}s.visible=!1}function bm(){let s=li,e=Ie("#info");e.classList.remove("empty");let t=[...new Set([...s.muscles].map(r=>An(r.userData.m.b)))],n=r=>s.rows[r].size?`<ul>${[...s.rows[r]].map(([o,a])=>`<li>${o}${a?' <span class="muted">(calculado)</span>':""}</li>`).join("")}</ul>`:'<p class="muted">Sin datos en el modelo.</p>',i=[...s.rows.O.values(),...s.rows.I.values()].some(Boolean);e.innerHTML=`<div class="ttl">Origen e inserci\xF3n</div><div class="sub2">${t.join(", ")}</div>
    <div class="legend"><span><i style="background:#ff7a1a"></i>Origen</span><span><i style="background:#1e7bff"></i>Inserci\xF3n</span></div>
    <div class="sec">Origen</div>${n("O")}
    <div class="sec">Inserci\xF3n</div>${n("I")}
    ${i?'<p class="note">\xABCalculado\xBB: el modelo no trae esa \xE1rea; se marca el contacto del m\xFAsculo con el hueso en ese extremo (aproximaci\xF3n).</p>':""}
    <div class="btns"><button id="aOpq">${s.opaque?"M\xFAsculo transparente":"M\xFAsculo opaco"}</button><button id="aFocus">Enfocar</button><button id="aExit">Salir</button></div>`,Ie("#aOpq").onclick=()=>{s.opaque=!s.opaque,Ze(),bm()},Ie("#aFocus").onclick=()=>hn(zt([...s.muscles,...s.marks,...s.extra])),Ie("#aExit").onclick=()=>Mr()}var Lh=new qt(new w(0,0,-1),0);function Ih(){let s=Ie("#cutAxis").value,e=Ie("#cutPos");if(e.disabled=s==="none",s==="none"){et.clippingPlanes=[],nn=!0;return}let t=vo.isEmpty()?zt(tn):vo,n=+e.value/100,i={cor:["z",new w(0,0,-1)],sag:["x",new w(1,0,0)],tra:["y",new w(0,-1,0)]}[s],r=t.min[i[0]]+(t.max[i[0]]-t.min[i[0]])*n;Lh.normal.copy(i[1]),Lh.constant=-i[1][i[0]]*r,et.clippingPlanes=[Lh],nn=!0}function ub(){let s=matchMedia("(max-width: 760px), (pointer: coarse) and (max-height: 520px)"),e=document.body,t=()=>{e.classList.toggle("mobile",s.matches),setTimeout(Gh,50)};s.addEventListener("change",t),t();let n=null,i=()=>{e.classList.remove("sheet","viewopen"),n=null,document.querySelectorAll("#mnav button").forEach(a=>a.classList.remove("on"))};document.querySelectorAll("#mnav button").forEach(a=>a.onclick=()=>{let c=a.dataset.mt;if(n===c){i();return}i(),n=c,a.classList.add("on"),e.classList.remove("info"),c==="vista"?e.classList.add("viewopen"):(document.querySelector(`.tabs button[data-tab="${c}"]`)?.click(),e.classList.add("sheet"))}),document.querySelectorAll(".sheetClose").forEach(a=>a.onclick=()=>{a.dataset.close==="info"?e.classList.remove("info"):i()});let r=document.getElementById("info"),o="";new MutationObserver(()=>{if(!e.classList.contains("mobile"))return;let a=r.classList.contains("empty"),c=r.innerHTML;if(a){e.classList.remove("info"),o=c;return}c.slice(0,200)!==o.slice(0,200)&&(i(),e.classList.add("info")),o=c}).observe(r,{childList:!0,attributes:!0,attributeFilter:["class"]}),document.getElementById("infoGrab")?.addEventListener("click",()=>e.classList.toggle("infoBig"))}function hb(){"serviceWorker"in navigator&&(location.protocol==="https:"||location.hostname==="localhost")&&(/claude\.ai|claudeusercontent/.test(location.hostname)||navigator.serviceWorker.register("sw.js").catch(()=>{}))}var Sm=new Ya;Sm.setDecoderPath("lib/draco/");var Tm=new Xa;Tm.setDRACOLoader(Sm);async function $n(s){if(!Uh[s])return bc[s]||(_r(`Cargando ${Dc.find(e=>e.id===s).es}\u2026`),bc[s]=(async()=>{let e;try{let i=await fetch(`data/sys${s}.glb`);if(!i.ok||(e=await i.arrayBuffer(),new Uint32Array(e.slice(0,4))[0]!==1179937895))throw 0}catch{let i=await(await fetch(`data/sys${s}.b64.txt`)).text(),r=atob(i.trim()),o=new Uint8Array(r.length);for(let a=0;a<r.length;a++)o[a]=r.charCodeAt(a);e=o.buffer}let t=await new Promise((i,r)=>Tm.parse(e,"",i,r)),n=[];t.scene.updateMatrixWorld(!0),t.scene.traverse(i=>{if(!i.isMesh)return;let r=i.name in Ai?i.name:i.parent&&i.parent.name in Ai?i.parent.name:null;r&&(i.userData.id=r,i.userData.m=Ai[r],i.geometry.computeBoundingSphere(),n.push(i))});for(let i of n)i.matrixWorld.decompose(i.position,i.quaternion,i.scale),To.add(i);s==="6"&&_o.length&&n.push(...sb()),Pt[s]=n,tn.push(...n),Uh[s]=!0;for(let i of n){let r=i.userData.m.g;r in ms||(ms[r]=!QM.has(r))}Ic(),Ze(),_r(""),(s==="4"||s==="2")&&Pt[4]&&Pt[2]&&setTimeout(ym,30),s==="4"&&ob()})().catch(e=>{_r("Error al cargar "+s),console.error(e)})),bc[s]}function Jn(s){return Oh==="A"||!s.s||s.s===Oh}function Ze(){let s=Fn,e=new Set(Qe);for(let t of tn){let n=t.userData.m;if(li){lb(t);continue}if(St){Ib(t);continue}if(de){bb(t);continue}let i=yr[n.sys]&&ms[n.g]!==!1&&Jn(n)&&!ui.has(t),r="normal";if(wi&&(i=wi.has(t)&&Jn(n)),s){let o=s.role.get(t),a=o&&(o.startsWith("skin")?gr.skin:gr[o]);o&&a&&Jn(n)?(i=!0,r=o):i&&(r=n.sys==="1"?"normal":"ghost"),n.sys==="9"&&!o&&(i=!1)}else xo&&Qe.length&&!e.has(t)&&i&&(r="ghost");e.has(t)&&i&&(r="sel"),t.visible=i,t.material=r==="normal"?Kn("normal",n.g,Rc[n.sys]??1):Kn(r==="ghost"?"ghost":r,n.g),t.renderOrder=r==="nerve"?4:r==="ghost"||n.sys==="9"?2:0}Um(),nn=!0}var vo=new nt;function hn(s,e){let t=s.getCenter(new w),n=s.getSize(new w),r=Math.max(n.x,n.y,n.z)*.5/Math.sin($s.degToRad(Bt.fov/2))*1.05,o=e?e.clone().normalize():Bt.position.clone().sub(hi.target).normalize();hi.target.copy(t),Bt.position.copy(t).addScaledVector(o,Math.max(r,.05)),Bt.near=Math.max(r/500,.001),Bt.far=r*20,Bt.updateProjectionMatrix(),nn=!0}function zt(s){let e=new nt;for(let t of s)e.expandByObject(t);return e}var fb={ant:[0,0,1],post:[0,0,-1],latD:[-1,0,0],latI:[1,0,0],sup:[0,1,.001],inf:[0,-1,.001]};function Fh(s){hn(vo.isEmpty()?zt(tn):vo,new w(...fb[s]))}var Pc=new Oa,Lc=new re,Ac=null;Qn.addEventListener("pointerdown",s=>{Ac=[s.clientX,s.clientY]});var Tc={t:0,o:null};Qn.addEventListener("pointerup",s=>{if(!Ac||Math.hypot(s.clientX-Ac[0],s.clientY-Ac[1])>5)return;if(St){let t=db(s),n=t&&t.object.userData.dl?t.object.userData.dl[t.face.a]:null;n&&So(n);return}let e=Em(s);if(s.pointerType==="touch"){let t=performance.now();if(e&&Tc.o===e&&t-Tc.t<350){hn(zt([e])),Tc={t:0,o:null};return}Tc={t,o:e}}s.shiftKey&&e?pb(e):vr(e?[e]:[])});Qn.addEventListener("dblclick",s=>{let e=Em(s);e&&hn(zt([e]))});function db(s){let e=Qn.getBoundingClientRect();return Lc.set((s.clientX-e.left)/e.width*2-1,-((s.clientY-e.top)/e.height)*2+1),Pc.setFromCamera(Lc,Bt),Pc.intersectObjects(tn.filter(n=>n.visible&&n.userData.dl),!1)[0]||null}function Em(s){let e=Qn.getBoundingClientRect();Lc.set((s.clientX-e.left)/e.width*2-1,-((s.clientY-e.top)/e.height)*2+1),Pc.setFromCamera(Lc,Bt);let t=tn.filter(i=>i.visible&&!(i.material.opacity<.1)),n=Pc.intersectObjects(t,!1);return n.length?n[0].object:null}function pb(s){let e=Qe.indexOf(s);e>=0?Qe.splice(e,1):Qe.push(s),Am()}function vr(s){Qe=s,Am()}function Am(){Ze(),ei()}function wm(s,e){let t=tn.filter(n=>(n.userData.m.b===s||n.userData.m.chain.includes(s))&&(!e||n.userData.m.sys===e)&&Jn(n.userData.m));return t.length&&vr(t),t}function mb(s){let e=new Map,t=(n,i)=>{(!e.has(n)||i==="nerve")&&e.set(n,i)};for(let n of tn){let i=n.userData.m;if(i.sys==="7"&&s.show.some(r=>i.b===r)&&t(n,"nerve"),i.sys==="4"&&s.muscles.some(r=>i.b===r||i.chain.includes(r))&&t(n,"muscle"),i.sys==="9"){let r=s.skin.find(o=>i.b===o.r||i.chain.includes(o.r));r&&t(n,r.p?"skinPart":"skinFull")}}return e}async function Wh(s){Mr(!0),de&&(de=null,En()),St&&Bc(),await Promise.all(["4","7","9","1"].map($n)),Fn={nerve:s,role:mb(s)},wi=null,Qe=[],Ze(),Om(s),document.querySelectorAll(".nv").forEach(e=>e.classList.toggle("on",e.dataset.k===s.key))}function Oc(){Fn=null,document.querySelectorAll(".nv").forEach(s=>s.classList.remove("on")),Ze(),ei()}function gb(s){return s.sys==="4"?ps.filter(e=>e.muscles.some(t=>s.b===t||s.chain.includes(t))):s.sys==="9"?ps.filter(e=>e.skin.some(t=>s.b===t.r||s.chain.includes(t.r))):[]}var Bh={"Muscles of head":"Cabeza","Muscles of neck":"Cuello","Epaxial muscles":"Dorso","Hypaxial muscles of back":"Dorso","Muscles of thorax":"T\xF3rax","Thoracic part of muscular system":"T\xF3rax","Muscles of abdomen":"Abdomen","Muscles of pelvis":"Pelvis y perin\xE9","Muscles of upper limb":"Miembro superior","Muscles of lower limb":"Miembro inferior"},xb=["Todo el cuerpo","Cabeza","Cuello","Dorso","T\xF3rax","Abdomen","Pared abdominal posterior","Pelvis y perin\xE9","Gl\xFAteo","Miembro superior","Miembro inferior"],xr={},On=(()=>{try{return localStorage.getItem("deepFirst")!=="0"}catch{return!0}})();function Rm(s){for(let[e,t]of Object.entries(xr))if(!e.startsWith("_")){for(let n=0;n<t.length;n++)if(t[n].musculos.some(i=>s.b===i||s.chain[0]===i))return{r:e,k:n+1,name:t[n].capa,n:t.length}}return null}var Mo={},de=null;function _b(s){let e=Rm(s);if(e)return e.r;for(let t of s.chain)if(Bh[t])return Bh[t];return null}function yb(s){return s.userData.m.sys==="4"&&s.userData.m.g==="M\xFAsculos"&&Mo[s.userData.id]}function vb(s){let e=(Pt[4]||[]).filter(i=>yb(i)&&(s==="Todo el cuerpo"||_b(i.userData.m)===s));if(xr[s]){let i=xr[s];return{ms:e,n:i.length,of:r=>Rm(r.userData.m)?.k??i.length,name:r=>i[r-1]?.capa}}let t=[...new Set(e.map(i=>Mo[i.userData.id]))].sort((i,r)=>i-r),n=new Map(t.map((i,r)=>[i,r+1]));return{ms:e,n:t.length,of:i=>n.get(Mo[i.userData.id]),name:()=>null}}var Cm=(s,e)=>new _e().setHSL(.012,.62,.66-.42*(e>1?(s-1)/(e-1):0)),Dh={};function Mb(s,e){let t=s+"/"+e;return Dh[t]?Dh[t]:Dh[t]=_m(new Ft({color:Cm(s,e),roughness:.5,envMapIntensity:.4,side:gt}))}async function zh(s={}){Mr(!0),St&&Bc(),Fn&&Oc(),await Promise.all(["1","4"].map($n)),de=Object.assign(de||{region:"Todo el cuerpo",from:null,only:!1,color:!0,bones:!0,solo:null},s);let e=vb(de.region);de.L=e,de.from==null&&(de.from=On?e.n:1),de.from=Math.min(Math.max(1,de.from),e.n),de.set=new Set(e.ms),wi=null,Ze(),En()}function Pm(){de=null,Qe=[],Ze(),ei(),En()}function bb(s){let e=s.userData.m;if(de.set.has(s)){let t=de.L.of(s),n=On?de.L.n-t+1:t,i=Jn(e)&&!ui.has(s)&&(de.solo?de.solo.has(s):de.only?n===de.from:On?n<=de.from:n>=de.from);s.visible=i,s.material=Qe.includes(s)&&!de.solo?Kn("sel",e.g):de.color?Mb(t,de.L.n):Kn("normal",e.g),s.renderOrder=0;return}if(e.sys==="1"&&de.bones){s.visible=Jn(e)&&ms[e.g]!==!1,s.material=Kn("normal",e.g,de.solo?1:Rc[1]??1),s.renderOrder=0;return}s.visible=!1}function Lm(s){let e=de.L.ms.filter(r=>(r.userData.m.b===s||r.userData.m.chain[0]===s)&&Jn(r.userData.m));if(!e.length)return;de.solo=new Set(e),Qe=e,Ze(),ei();let t=e.filter(r=>r.userData.m.s==="D"),n=t.length?t:e,i=zt(n);i.expandByVector(i.getSize(new w).multiplyScalar(.45)),hn(i,new w(...n[0].userData.m.s==="D"?[-.35,.1,1]:[0,.1,1])),En()}function En(){let s=Ie("#muscles");if(!s)return;if(!de){s.innerHTML=`<p class="small muted" style="margin:4px">Explora los m\xFAsculos uno a uno o por planos de profundidad, de superficial a profundo, en cada regi\xF3n.</p>
      <div class="btns" style="margin:8px 4px"><button id="mOpen">Abrir explorador muscular</button></div>`,Ie("#mOpen").onclick=()=>zh();return}let e=de.L,t={};for(let r of e.ms){if(!Jn(r.userData.m))continue;let o=e.of(r),a=r.userData.m,c=a.chain[0]&&!Bh[a.chain[0]]&&/muscle|Muscle|Triceps|Biceps|Deltoid|Trapezius|Masseter|Pronator|Gastrocnemius/.test(a.chain[0])&&!/compartment|part of|muscles$/i.test(a.chain[0])?a.chain[0]:null;(t[o]||=new Map).set(a.b,{b:a.b,parent:c})}let n=de.solo?[...de.solo][0].userData.m.b:null;s.innerHTML=`
    <div class="mreg">${xb.map(r=>`<button data-r="${r}" class="${r===de.region?"on":""}">${r}</button>`).join("")}</div>
    <div class="mdepth">
      <div class="row2"><b>Profundidad</b><span class="muted">${de.only?"solo capa":On?"capas 1 a":"desde capa"} ${de.from} de ${e.n}</span></div>
      <input type="range" id="mFrom" min="1" max="${e.n}" step="1" value="${de.from}" ${de.solo?"disabled":""}>
      <div class="row2 small muted"><span>${On?"Profundo":"Superficial"}</span><span>${On?"Superficial":"Profundo"}</span></div>
      <div class="opts">
        <label><input type="checkbox" id="mOnly" ${de.only?"checked":""}>Solo esta capa</label>
        <label><input type="checkbox" id="mColor" ${de.color?"checked":""}>Color por capa</label>
        <label><input type="checkbox" id="mBones" ${de.bones?"checked":""}>Esqueleto</label>
        <label title="La capa 1 es la m\xE1s profunda; el control va agregando capas hacia la superficie"><input type="checkbox" id="mDeep" ${On?"checked":""}>Construir desde lo profundo</label>
      </div>
      ${de.solo?'<div class="btns"><button id="mBack">\u2190 Volver a la capa</button><button id="mFlip">Rotar 180\xB0</button></div>':""}
    </div>
    ${Object.keys(t).map(r=>[+r,On?e.n-+r+1:+r]).sort((r,o)=>r[1]-o[1]).map(([r,o])=>`
      <div class="ml ${!de.solo&&(de.only?o===de.from:On?o<=de.from:o>=de.from)?"":"dim"}">
        <div class="mlh" data-k="${o}"><i style="background:#${Cm(r,e.n).getHexString()}"></i><span class="lt">Capa ${o}${e.name(r)?" \xB7 "+e.name(r):r===1?" \xB7 superficial":r===e.n?" \xB7 profunda":""}</span><span>${t[r].size}</span></div>
        ${[...t[r].values()].sort((a,c)=>An(a.b).localeCompare(An(c.b))).map(a=>`<a class="mi ${n===a.b?"on":""}" data-b="${encodeURIComponent(a.b)}">${An(a.b)}</a>`).join("")}
      </div>`).join("")}
    <div class="btns" style="margin:10px 4px"><button id="mClose">Salir del explorador</button></div>`,s.querySelectorAll(".mreg button").forEach(r=>r.onclick=()=>zh({region:r.dataset.r,from:null,solo:null}).then(()=>hn(zt(de.L.ms.length?de.L.ms:tn))));let i=Ie("#mFrom");i.oninput=()=>{de.from=+i.value,Ze(),En()},Ie("#mOnly").onchange=r=>{de.only=r.target.checked,Ze(),En()},Ie("#mColor").onchange=r=>{de.color=r.target.checked,Ze()},Ie("#mBones").onchange=r=>{de.bones=r.target.checked,Ze()},Ie("#mDeep").onchange=r=>{On=r.target.checked;try{localStorage.setItem("deepFirst",On?"1":"0")}catch{}de.from=de.only?de.L.n-de.from+1:On?de.L.n:1,Ze(),En()},Ie("#mBack")&&(Ie("#mBack").onclick=()=>{de.solo=null,Qe=[],Ze(),ei(),En()}),Ie("#mClose").onclick=Pm,Ie("#mFlip")&&(Ie("#mFlip").onclick=()=>{let r=Bt.position.clone().sub(hi.target);r.x*=-1,r.z*=-1,Bt.position.copy(hi.target).add(r),nn=!0}),s.querySelectorAll(".mlh").forEach(r=>r.onclick=()=>{de.from=+r.dataset.k,de.only=!0,de.solo=null,Ze(),En()}),s.querySelectorAll(".mi").forEach(r=>r.onclick=()=>Lm(decodeURIComponent(r.dataset.b)))}var Fc={V1:{g:"Trig\xE9mino",p:"Territorio del n. oft\xE1lmico: frente, p\xE1rpado superior, dorso nasal.",t:!0},V2:{g:"Trig\xE9mino",p:"Territorio del n. maxilar: mejilla, labio superior, ala nasal.",t:!0},V3:{g:"Trig\xE9mino",p:"Territorio del n. mandibular: ment\xF3n, labio inferior, regi\xF3n temporal anterior.",t:!0},C2:{g:"Cervical",p:"\u22651 cm lateral a la protuberancia occipital externa (o 3 cm detr\xE1s de la oreja)."},C3:{g:"Cervical",p:"Fosa supraclavicular, l\xEDnea medioclavicular, por detr\xE1s de la clav\xEDcula."},C4:{g:"Cervical",p:"Sobre la articulaci\xF3n acromioclavicular.",my:"Diafragma (C3\u2013C5)"},C5:{g:"Cervical",p:"Lado lateral (radial) de la fosa antecubital, proximal al pliegue del codo.",my:"Flexores del codo",mm:["Biceps brachii muscle","Brachialis muscle"],rf:"Bicipital"},C6:{g:"Cervical",p:"Pulgar: cara dorsal de la falange proximal.",my:"Extensores de la mu\xF1eca",mm:["Extensor carpi radialis longus","Extensor carpi radialis brevis"],rf:"Braquiorradial"},C7:{g:"Cervical",p:"Dedo medio: cara dorsal de la falange proximal.",my:"Extensores del codo",mm:["Triceps brachii muscle"],rf:"Tricipital"},C8:{g:"Cervical",p:"Dedo me\xF1ique: cara dorsal de la falange proximal.",my:"Flexor profundo del dedo medio",mm:["Flexor digitorum profundus"]},T1:{g:"Tor\xE1cico",p:"Lado medial (cubital) de la fosa antecubital, proximal al epic\xF3ndilo medial.",my:"Abductor del me\xF1ique",mm:["Abductor digiti minimi of hand"]},T2:{g:"Tor\xE1cico",p:"V\xE9rtice de la axila."},T3:{g:"Tor\xE1cico",p:"L\xEDnea medioclavicular, 3.er espacio intercostal."},T4:{g:"Tor\xE1cico",p:"4.\xBA espacio intercostal (l\xEDnea del pez\xF3n)."},T5:{g:"Tor\xE1cico",p:"5.\xBA espacio intercostal, l\xEDnea medioclavicular."},T6:{g:"Tor\xE1cico",p:"6.\xBA espacio intercostal (nivel del xifoides)."},T7:{g:"Tor\xE1cico",p:"7.\xBA espacio intercostal, l\xEDnea medioclavicular."},T8:{g:"Tor\xE1cico",p:"8.\xBA espacio intercostal (entre T6 y T10)."},T9:{g:"Tor\xE1cico",p:"9.\xBA espacio intercostal, l\xEDnea medioclavicular."},T10:{g:"Tor\xE1cico",p:"Ombligo (10.\xBA espacio intercostal)."},T11:{g:"Tor\xE1cico",p:"Punto medio entre T10 y T12."},T12:{g:"Tor\xE1cico",p:"Punto medio del ligamento inguinal."},L1:{g:"Lumbar",p:"Mitad de la distancia entre T12 y L2 (muslo anterosuperior)."},L2:{g:"Lumbar",p:"Cara anteromedial del muslo, punto medio entre el ligamento inguinal y el c\xF3ndilo femoral medial.",my:"Flexores de cadera",mm:["Iliacus muscle","Psoas major"]},L3:{g:"Lumbar",p:"C\xF3ndilo femoral medial, sobre la rodilla.",my:"Extensores de rodilla",mm:["Rectus femoris muscle","Vastus lateralis muscle","Vastus medialis muscle","Vastus intermedius muscle"]},L4:{g:"Lumbar",p:"Mal\xE9olo medial.",my:"Dorsiflexores del tobillo",mm:["Tibialis anterior muscle"],rf:"Rotuliano (L3\u2013L4)"},L5:{g:"Lumbar",p:"Dorso del pie, 3.\xAA articulaci\xF3n metatarsofal\xE1ngica.",my:"Extensor largo del dedo gordo",mm:["Extensor hallucis longus"]},S1:{g:"Sacro",p:"Cara lateral del tal\xF3n (calc\xE1neo).",my:"Flexores plantares del tobillo",mm:["Lateral head of gastrocnemius","Medial head of gastrocnemius","Soleus muscle"],rf:"Aqu\xEDleo"},S2:{g:"Sacro",p:"L\xEDnea media de la fosa popl\xEDtea."},S3:{g:"Sacro",p:"Tuberosidad isqui\xE1tica o pliegue infragl\xFAteo."},"S4-S5":{g:"Sacro",p:"Regi\xF3n perianal, <1 cm lateral a la uni\xF3n mucocut\xE1nea.",rf:"Bulbocavernoso / anal"}},Xh=Object.keys(Fc);var bo={};Xh.forEach((s,e)=>{let t=(e*137.508+190)%360,n=e%2?.66:.5;bo[s]=new _e().setHSL(t/360,.62,n)});var Sb=/^(Hairs|Hair|Pubic hairs|Eyelashes|Hairs of eyebrow|Eyebrow)/,hm=new Set(["Epigastric region","Umbilical region","Hypogastric region","Lateral region of abdomen","Hypochondriac region","Inguinal region","Umbilicus"]),fm={"Anal region":"S4-S5","Urogenital region":"S3"},ds=null,St=null,Im=null,Tb=new Ft({vertexColors:!0,roughness:.75,side:gt}),Eb=new _e(3111935),Ab=new Ft({vertexColors:!0,roughness:.75,side:gt,transparent:!0,opacity:.35,depthWrite:!1});function wb(){let s=ds.pts,e=s.length/3,t=.03,n=new Map;for(let i=0;i<e;i++){let r=Math.floor(s[3*i]/t)+","+Math.floor(s[3*i+1]/t)+","+Math.floor(s[3*i+2]/t),o=n.get(r);o||n.set(r,o=[]),o.push(i)}Im={g:n,cs:t}}function Rb(s,e,t){let{g:n,cs:i}=Im,r=ds.pts,o=9,a=Math.floor(s/i),c=Math.floor(e/i),l=Math.floor(t/i),u=[],f=[];for(let _=0;_<14;_++){for(let m=-_;m<=_;m++)for(let d=-_;d<=_;d++)for(let y=-_;y<=_;y++){if(Math.max(Math.abs(m),Math.abs(d),Math.abs(y))!==_)continue;let x=n.get(a+m+","+(c+d)+","+(l+y));if(x)for(let v of x){let S=r[3*v]-s,b=r[3*v+1]-e,T=r[3*v+2]-t,P=S*S+b*b+T*T;if(u.length<o||P<u[u.length-1]){let M=u.length;for(;M>0&&u[M-1]>P;)M--;u.splice(M,0,P),f.splice(M,0,v),u.length>o&&(u.pop(),f.pop())}}}if(u.length>=o&&Math.sqrt(u[u.length-1])<_*i)break}if(!f.length)return null;let h={},p=null,g=-1;return f.forEach((_,m)=>{let d=ds.labels[ds.lab[_]],y=1/(Math.sqrt(u[m])+.01);h[d]=(h[d]||0)+y,h[d]>g&&(g=h[d],p=d)}),p}function Cb(s,e){let t=ds.abd,n=e-.35*Math.abs(s-t.xMid),i;return n>=t.yUmb?i=10-4*(n-t.yUmb)/(t.yXiph-t.yUmb):n>=t.yIng?i=10+2*(t.yUmb-n)/(t.yUmb-t.yIng):i=12+(t.yIng-n)/.05,i=Math.round(Math.max(6,Math.min(13,i))),i===13?"L1":"T"+i}function Pb(s){if(s.userData.dl)return;let e=s.userData.m,t=s.geometry,n=t.attributes.position,i=n.count,r=new Array(i),o=new w;s.updateMatrixWorld();for(let a=0;a<i;a++)o.fromBufferAttribute(n,a).applyMatrix4(s.matrixWorld),fm[e.b]?r[a]=fm[e.b]:hm.has(e.b)||e.chain.some(c=>hm.has(c))?r[a]=Cb(o.x,o.y):r[a]=Rb(o.x,o.y,o.z);s.userData.dl=r,t.setAttribute("color",new st(new Float32Array(i*4),4))}function Lb(s){let e=s.userData.dl,t=s.geometry.attributes.color,n=St.level,i=new _e(13223618);for(let r=0;r<e.length;r++){let o=bo[e[r]]||i,a=1;n&&(e[r]===n?(o=Eb,a=.92):(o=i,a=.1)),t.setXYZW(r,o.r,o.g,o.b,a)}t.needsUpdate=!0}async function So(s=null){Mr(!0),de&&(de=null,En()),Fn&&(Fn=null,document.querySelectorAll(".nv").forEach(n=>n.classList.remove("on"))),_r("Calculando dermatomas\u2026"),await Promise.all(["9","1","4"].map($n)),ds||(ds=await(await fetch("data/dermatomes.json")).json(),wb());let e=Pt[9].filter(n=>!Sb.test(n.userData.m.b));e.forEach(Pb),St={level:s,skin:new Set(e),muscles:new Set,showMyo:St?St.showMyo:!1};let t=s&&Fc[s];if(t&&t.mm)for(let n of Pt[4]){let i=n.userData.m;t.mm.some(r=>i.b===r||i.chain.includes(r))&&St.muscles.add(n)}e.forEach(Lb),Qe=[],wi=null,_r(""),Ze(),Db(),document.querySelectorAll(".dm").forEach(n=>n.classList.toggle("on",n.dataset.k===s))}function Bc(){St=null,document.querySelectorAll(".dm").forEach(s=>s.classList.remove("on")),Ze(),ei()}function Ib(s){let e=s.userData.m;if(St.skin.has(s)){s.visible=Jn(e),s.material=St.showMyo&&St.muscles.size?Ab:Tb,s.renderOrder=2;return}if(St.muscles.has(s)&&St.showMyo){s.visible=Jn(e),s.material=Kn("muscle",e.g),s.renderOrder=0;return}if(e.sys==="1"&&St.showMyo&&St.muscles.size){s.visible=!0,s.material=Kn("normal",e.g,1),s.renderOrder=0;return}s.visible=!1}function Db(){let s=Ie("#info");s.classList.remove("empty");let e=St.level,t=e&&Fc[e];if(!t)s.innerHTML=`<div class="ttl">Mapa de dermatomas</div><div class="sub2">Modelo basado en los puntos sensitivos clave ASIA/ISNCSCI</div>
      <p class="note">Haz clic sobre la piel para identificar el dermatoma, o elige un nivel en la lista. La cara se muestra como territorio del trig\xE9mino (V1\u2013V3), que no es un dermatoma espinal.</p>
      <div class="sec">Leyenda</div><div class="dlegend">${Xh.map(n=>`<a data-l="${n}"><i style="background:#${bo[n].getHexString()}"></i>${n}</a>`).join("")}</div>
      <p class="muted small">Los dermatomas se solapan entre niveles vecinos y var\xEDan entre personas; este mapa es una aproximaci\xF3n docente generada a partir del esqueleto del modelo. Verif\xEDcalo con la exploraci\xF3n cl\xEDnica.</p>
      <div class="btns"><button id="bDx">Salir de dermatomas</button></div>`;else{s.innerHTML=`<div class="ttl">Dermatoma ${e}</div><div class="sub2">${t.g}${t.t?" \xB7 territorio del nervio trig\xE9mino":""}</div>
      <div class="tag" style="--c:#${bo[e].getHexString()}">${e}</div>
      <div class="sec">Punto sensitivo clave</div><p>${t.p}</p>
      ${t.my?`<div class="sec">Miotoma (m\xFAsculo clave)</div><p>${t.my}</p>`:""}
      ${t.rf?`<div class="sec">Reflejo</div><p>${t.rf}</p>`:""}
      ${t.mm?`<label class="chips"><input type="checkbox" id="cMyo" ${St.showMyo?"checked":""}>Mostrar m\xFAsculo clave en el modelo</label>`:""}
      <div class="btns"><button id="bDall">Ver todos los dermatomas</button><button id="bDx">Salir</button></div>
      <p class="muted small">Aproximaci\xF3n docente: los l\xEDmites reales se solapan con los niveles vecinos.</p>`,Ie("#bDall").onclick=()=>So(null);let n=Ie("#cMyo");n&&(n.onchange=()=>{St.showMyo=n.checked,Ze()})}Ie("#bDx").onclick=Bc,s.querySelectorAll(".dlegend a").forEach(n=>n.onclick=()=>So(n.dataset.l))}function Nb(){let s=Ie("#derms"),e={};Xh.forEach(t=>(e[Fc[t].g]||=[]).push(t)),s.innerHTML='<a class="dm all" data-k="">Todos los dermatomas</a>'+Object.entries(e).map(([t,n])=>`<div class="ng">${t}</div><div class="dgrid">`+n.map(i=>`<a class="dm" data-k="${i}"><i style="background:#${bo[i].getHexString()}"></i>${i}</a>`).join("")+"</div>").join(""),s.querySelectorAll(".dm").forEach(t=>t.onclick=()=>So(t.dataset.k||null))}function Dm(){let s=tn.filter(d=>d.visible&&d.userData.m.sys==="4");if(!s.length){pm("No hay m\xFAsculos visibles para retirar.");return}let e=512,t=new Yt(e,e),n=tn.map(d=>[d,d.visible,d.material]);for(let d of tn)d.visible=!1;s.forEach((d,y)=>{d.visible=!0,d.material=new Qt({color:new _e().setHex(y+1,pt),side:gt})});let i=zt(s),r=i.getCenter(new w),o=i.getSize(new w).length()/2,a=new Wn(-o,o,o,-o,.001,o*4),c=new Uint32Array(s.length+1),l=new Uint8Array(e*e*4),u=en.background;en.background=new _e(0);let f=et.outputColorSpace;et.outputColorSpace=pt;let h=et.toneMapping;et.toneMapping=Hn;for(let d=-1;d<=1;d++)for(let y=-1;y<=1;y++)for(let x=-1;x<=1;x++){if(!d&&!y&&!x)continue;let v=new w(d,y,x).normalize();a.position.copy(r).addScaledVector(v,o*2),a.up.set(Math.abs(y)>.9?1:0,Math.abs(y)>.9?0:1,0),a.lookAt(r),a.updateMatrixWorld(),et.setRenderTarget(t),et.render(en,a),et.readRenderTargetPixels(t,0,0,e,e,l);for(let S=0;S<l.length;S+=4){let b=l[S]<<16|l[S+1]<<8|l[S+2];b&&b<=s.length&&c[b]++}}et.setRenderTarget(null),en.background=u,et.outputColorSpace=f,et.toneMapping=h,s.forEach(d=>d.material.dispose());for(let[d,y,x]of n)d.visible=y,d.material=x;t.dispose();let p=(2*o/e)**2,g=26,_=s.map((d,y)=>c[y+1]/g*p/Math.max(Nm(d)/4,1e-9)),m=s.filter((d,y)=>_[y]>=.22);m.length||(m=s.filter((d,y)=>c[y+1]>0)),m.forEach(d=>ui.add(d)),Hh.push(m),Ze(),pm(`Capa retirada: ${new Set(m.map(d=>d.userData.m.b)).size} m\xFAsculos. Quedan ${s.length-m.length} visibles.`)}function Ub(s,e,t=768){let n=new Yt(t,t),i=tn.map(d=>[d,d.visible,d.material]);for(let d of tn)d.visible=!1;let r=new Qt({color:0,side:gt});e.forEach(d=>{d.visible=!0,d.material=r});let o=s.map((d,y)=>(d.visible=!0,d.material=new Qt({color:new _e().setHex(y+1,pt),side:gt}))),a=zt(s),c=a.getCenter(new w),l=a.getSize(new w).length()/2,u=new Wn(-l,l,l,-l,.001,l*4),f=new Uint32Array(s.length+1),h=new Uint8Array(t*t*4),p=en.background;en.background=new _e(0);let g=et.outputColorSpace;et.outputColorSpace=pt;let _=et.toneMapping;et.toneMapping=Hn;for(let d=-1;d<=1;d++)for(let y=-1;y<=1;y++)for(let x=-1;x<=1;x++){if(!d&&!y&&!x)continue;let v=new w(d,y,x).normalize();u.position.copy(c).addScaledVector(v,l*2),u.up.set(Math.abs(y)>.9?1:0,Math.abs(y)>.9?0:1,0),u.lookAt(c),u.updateMatrixWorld(),et.setRenderTarget(n),et.render(en,u),et.readRenderTargetPixels(n,0,0,t,t,h);for(let S=0;S<h.length;S+=4){let b=h[S]<<16|h[S+1]<<8|h[S+2];b&&b<=s.length&&f[b]++}}et.setRenderTarget(null),en.background=p,et.outputColorSpace=g,et.toneMapping=_,o.forEach(d=>d.dispose()),r.dispose(),n.dispose();for(let[d,y,x]of i)d.visible=y,d.material=x;let m=(2*l/t)**2;return s.map((d,y)=>({o:d,n:f[y+1],f:f[y+1]/26*m/Math.max(Nm(d)/4,1e-9)}))}async function Ob(){await Promise.all(["1","4"].map($n));let s=Pt[4].filter(i=>i.userData.m.g==="M\xFAsculos"),e=Pt[1].filter(i=>i.userData.m.g==="Huesos"),t={},n=1;for(;s.length&&n<=14;){let i=Ub(s,e),r=i.filter(a=>a.f>=.2).map(a=>a.o);if(r.length||(r=i.filter(a=>a.n>0).map(a=>a.o)),!r.length)break;r.forEach(a=>t[a.userData.id]=n);let o=new Set(r);s=s.filter(a=>!o.has(a)),n++}return s.forEach(i=>t[i.userData.id]=n),t}function Nm(s){if(s.userData.area)return s.userData.area;let e=s.geometry,t=e.attributes.position,n=e.index,i=new w,r=new w,o=new w;s.updateMatrixWorld();let a=s.matrixWorld,c=0,l=n?n.count:t.count;for(let u=0;u<l;u+=3){let f=n?n.getX(u):u,h=n?n.getX(u+1):u+1,p=n?n.getX(u+2):u+2;i.fromBufferAttribute(t,f).applyMatrix4(a),r.fromBufferAttribute(t,h).applyMatrix4(a),o.fromBufferAttribute(t,p).applyMatrix4(a),c+=r.sub(i).cross(o.sub(i)).length()/2}return s.userData.area=c}function Fb(){let s=Hh.pop();s&&(s.forEach(e=>ui.delete(e)),Ze())}function Ic(){let s=Ie("#layers");s.innerHTML="";for(let e of Dc){let t=Pt[e.id]||[],n=[...new Set(t.map(o=>o.userData.m.g))],i=document.createElement("div");i.className="sys",i.innerHTML=`<label class="row"><input type="checkbox" ${yr[e.id]?"checked":""}><span class="nm">${e.es}</span><span class="ct" data-sys="${e.id}">${Uh[e.id]?"":"\xB7"}</span></label>`;let r=i.querySelector("input");if(r.onchange=async()=>{yr[e.id]=r.checked,r.checked&&await $n(e.id),Ze()},n.length){let o=document.createElement("div");o.className="subs";for(let c of n){let l=document.createElement("label");l.className="row sub",l.innerHTML=`<input type="checkbox" ${ms[c]!==!1?"checked":""}><i style="background:#${(Nc[c]??13421772).toString(16).padStart(6,"0")}"></i><span class="nm">${c}</span>`,l.querySelector("input").onchange=u=>{ms[c]=u.target.checked,Ze()},o.appendChild(l)}let a=document.createElement("label");if(a.className="row sub op",a.innerHTML=`<span class="nm">Opacidad</span><input type="range" min="0.1" max="1" step="0.05" value="${Rc[e.id]??1}">`,a.querySelector("input").oninput=c=>{Rc[e.id]=+c.target.value,Ze()},o.appendChild(a),e.id==="6"){let c=document.createElement("label");c.className="row sub",c.innerHTML=`<input type="checkbox" ${yo?"checked":""}><span class="nm">Animar flujo linf\xE1tico</span>`,c.querySelector("input").onchange=l=>{yo=l.target.checked,yo||(Uc.value=0,nn=!0)},o.appendChild(c)}i.appendChild(o)}s.appendChild(i)}Um()}function Um(){document.querySelectorAll(".ct[data-sys]").forEach(s=>{let e=Pt[s.dataset.sys];e&&(s.textContent=e.filter(t=>t.visible).length+"/"+e.length)}),Ie("#hiddenCt").textContent=ui.size?`(${ui.size} ocultos)`:""}function Bb(s){return s==="D"?"derecho":s==="I"?"izquierdo":""}async function ei(){let s=Ie("#info");if(Fn||St||li)return;if(!Qe.length){s.classList.add("empty"),s.innerHTML=Vh?'<p class="hint">Toca una estructura para identificarla. Doble toque para acercarte. Un dedo rota; dos dedos hacen zoom y desplazan.</p>':'<p class="hint">Haz clic en una estructura para identificarla. Doble clic para acercarte. Shift+clic para selecci\xF3n m\xFAltiple.</p>';return}s.classList.remove("empty");let e=Qe[0],t=e.userData.m,n=[...new Set(Qe.map(l=>An(l.userData.m.b)))],i=Qe.length>1?n.length===1?n[0]:`${Qe.length} estructuras`:An(t.b),r=gb(t),o=t.chain.filter(l=>l&&!/^(Muscular system|Skeletal system|Joints|Cardiovascular system|Nervous system.*|Visceral systems|Lymphoid organs|Regions of human body|Muscular insertions)$/.test(l));if(s.innerHTML=`
    <div class="ttl">${i}</div>
    <div class="sub2">${Qe.length===1?`${t.b}${t.s?" \xB7 "+Bb(t.s):""}${t.ins?" \xB7 "+t.ins:""}`:n.slice(0,6).join(", ")}</div>
    <div class="tag" style="--c:#${(Nc[t.g]??13421772).toString(16).padStart(6,"0")}">${t.g}</div>
    ${o.length?`<div class="crumbs">${o.slice(0,4).map(l=>`<a data-g="${encodeURIComponent(l)}">${An(l)}</a>`).join(" \u2039 ")}</div>`:""}
    <div class="btns">
      <button id="bIso">Aislar</button><button id="bHide">Ocultar</button><button id="bGhost">${xo?"Resto s\xF3lido":"Resto transparente"}</button><button id="bFocus">Enfocar</button>${Qe.some(l=>l.userData.m.sys==="4"&&l.userData.m.g==="M\xFAsculos")?'<button id="bAtt" class="acc">Origen e inserci\xF3n</button>':""}
    </div>
    ${r.length?`<div class="sec">Inervaci\xF3n</div>${r.map(l=>`<a class="nlink" data-k="${l.key}">${l.es} <span>${l.roots}</span></a>`).join("")}`:""}
    <div class="sec">Descripci\xF3n ${t.d?"":'<span class="muted">(Wikipedia, ingl\xE9s)</span>'}</div><div class="desc" id="desc">\u2026</div>`,Ie("#bIso").onclick=()=>{if(de){de.solo=new Set(Qe.filter(l=>de.set.has(l))),Ze(),En(),hn(zt(Qe));return}wi=new Set(Qe),Ze(),hn(zt(Qe))},Ie("#bHide").onclick=()=>{Qe.forEach(l=>ui.add(l)),vr([])},Ie("#bGhost").onclick=()=>{xo=!xo,Ze(),ei()},Ie("#bFocus").onclick=()=>hn(zt(Qe)),Ie("#bAtt")&&(Ie("#bAtt").onclick=()=>Mm(Qe.slice())),s.querySelectorAll(".crumbs a").forEach(l=>l.onclick=()=>{wm(decodeURIComponent(l.dataset.g),t.sys)}),s.querySelectorAll(".nlink").forEach(l=>l.onclick=()=>Wh(ps.find(u=>u.key===l.dataset.k))),!go)try{go=await(await fetch("data/desc.json")).json()}catch{go={}}let a=t.d||go[e.userData.id]||Object.entries(go).find(([l])=>Ai[l]&&Ai[l].b===t.b)?.[1]||"",c=Ie("#desc");c&&(c.textContent=a?a.replace(/^=+\s*(.*?)\s*=+$/gm,`
$1`).replace(/\n{3,}/g,`

`).replace(/^\s*[^\n]*\n/,"").trim().slice(0,1200)+(a.length>1200?"\u2026":""):"Sin descripci\xF3n en el atlas.")}function Om(s){let e=Ie("#info");e.classList.remove("empty");let t=[...new Set(s.muscles)];e.innerHTML=`
    <div class="ttl">${s.es}</div>
    <div class="sub2">${s.key} \xB7 <b>${s.roots}</b> \xB7 ${s.plexus}</div>
    <div class="legend"><span><i style="background:#ffd400"></i>Nervio</span><span><i style="background:#ff3b1f"></i>Motor</span><span><i style="background:#2f7bff"></i>Piel (principal)</span><span><i style="background:#9fc3ff"></i>Piel (parcial)</span></div>
    <div class="chips"><label><input type="checkbox" data-nv="nerve" ${gr.nerve?"checked":""}>Nervio</label><label><input type="checkbox" data-nv="muscle" ${gr.muscle?"checked":""}>M\xFAsculos</label><label><input type="checkbox" data-nv="skin" ${gr.skin?"checked":""}>Piel</label></div>
    ${s.note?`<p class="note">${s.note}</p>`:""}
    ${s.show.length?"":'<p class="note warn">Este nervio no est\xE1 modelado en el atlas: se muestra solo su territorio.</p>'}
    <div class="sec">Inervaci\xF3n motora (${t.length})</div>
    ${t.length?`<ul>${t.map(n=>`<li><a data-m="${encodeURIComponent(n)}">${An(n)}</a></li>`).join("")}</ul>`:'<p class="muted">Nervio sensitivo puro.</p>'}
    <div class="sec">Territorio cut\xE1neo</div>
    ${s.skin.length?`<ul>${s.skin.map(n=>`<li>${An(n.r)}${n.p?' <span class="muted">(parcial)</span>':""}</li>`).join("")}</ul><p class="muted small">Aproximado a las regiones topogr\xE1ficas del modelo; los l\xEDmites reales var\xEDan entre personas y se solapan con nervios vecinos.</p>`:'<p class="muted">Sin territorio cut\xE1neo propio.</p>'}
    <div class="btns"><button id="bClr">Salir del modo inervaci\xF3n</button><button id="bFocusN">Enfocar</button></div>`,Ie("#bClr").onclick=Oc,e.querySelectorAll("[data-nv]").forEach(n=>n.onchange=()=>{gr[n.dataset.nv]=n.checked,Ze()}),Ie("#bFocusN").onclick=()=>{let n=[...Fn.role.keys()].filter(i=>i.visible);n.length&&hn(zt(n))},e.querySelectorAll("[data-m]").forEach(n=>n.onclick=()=>{let i=decodeURIComponent(n.dataset.m),r=tn.filter(o=>o.userData.m.sys==="4"&&(o.userData.m.b===i||o.userData.m.chain.includes(i))&&Jn(o.userData.m));r.length&&hn(zt(r))})}function zb(){let s=Ie("#nerves"),e={};for(let t of ps){let n=t.plexus.replace(/\s*\(.*\)/,"");(e[n]||=[]).push(t)}s.innerHTML=Object.entries(e).map(([t,n])=>`<div class="ng">${t}</div>`+n.map(i=>`<a class="nv" data-k="${i.key}">${i.es}<span>${i.roots}</span></a>`).join("")).join(""),s.querySelectorAll(".nv").forEach(t=>t.onclick=()=>Wh(ps.find(n=>n.key===t.dataset.k)))}function Fm(s){return s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase()}var kh=null;function kb(){let s=new Map;for(let[e,t]of Object.entries(Ai)){let n=(i,r)=>{let o=i+"|"+r;s.has(o)||s.set(o,{n:i,sys:r,es:An(i),t:Fm(i+" "+An(i))})};n(t.b,t.sys),t.chain.slice(0,2).forEach(i=>i&&n(i,t.sys))}kh=[...s.values()]}Ie("#q").addEventListener("input",s=>{let e=Fm(s.target.value.trim()),t=Ie("#results");if(e.length<2){t.innerHTML="";return}kh||kb();let n=e.split(/\s+/),i=kh.filter(r=>n.every(o=>r.t.includes(o))).slice(0,80);t.innerHTML=i.map((r,o)=>`<a data-i="${o}">${r.es}<span>${Dc.find(a=>a.id===r.sys).es.split(" ")[0]} \xB7 ${r.n}</span></a>`).join("")||'<p class="muted">Sin resultados</p>',t.querySelectorAll("a").forEach(r=>r.onclick=async()=>{let o=i[+r.dataset.i];Fn&&Oc(),yr[o.sys]=!0,await $n(o.sys),Ic();let a=wm(o.n,o.sys);a.length&&(a.forEach(c=>ui.delete(c)),Ze(),hn(zt(a)))})});function _r(s){Ie("#status").textContent=s,Ie("#status").style.display=s?"block":"none"}var dm;function pm(s){let e=Ie("#toast");e.textContent=s,e.classList.add("show"),clearTimeout(dm),dm=setTimeout(()=>e.classList.remove("show"),3500)}document.querySelectorAll("[data-view]").forEach(s=>s.onclick=()=>Fh(s.dataset.view));document.querySelectorAll("[data-side]").forEach(s=>s.onclick=()=>{Oh=s.dataset.side,document.querySelectorAll("[data-side]").forEach(e=>e.classList.toggle("on",e===s)),Ze(),Fn&&Om(Fn.nerve)});Ie("#bPeel").onclick=Dm;Ie("#bUnpeel").onclick=Fb;Ie("#bShowAll").onclick=()=>{ui.clear(),Hh.length=0,wi=null,xo=!1,Ze(),ei()};document.querySelectorAll(".tabs button").forEach(s=>s.onclick=()=>{document.querySelectorAll(".tabs button").forEach(e=>e.classList.toggle("on",e===s)),document.querySelectorAll(".tab").forEach(e=>e.hidden=e.id!==s.dataset.tab)});Ie("#bPanel").onclick=()=>document.body.classList.toggle("nopanel");window.addEventListener("keydown",s=>{s.target.tagName!=="INPUT"&&(s.key==="Escape"&&(li?Mr():de&&de.solo?(de.solo=null,Qe=[],Ze(),ei(),En()):de?Pm():St?Bc():Fn?Oc():(wi=null,vr([]))),s.key==="h"&&Qe.length&&(Qe.forEach(e=>ui.add(e)),vr([])),s.key==="i"&&Qe.length&&(wi=new Set(Qe),Ze()),s.key==="f"&&Qe.length&&hn(zt(Qe)))});var nn=!0,Hb=()=>{nn=!0};hi.addEventListener("change",Hb);var mr=!Vh,Zn=null,Ec=null;function Vb(){let s=Qn.clientWidth,e=Qn.clientHeight;Zn=new Ka(et),Zn.addPass(new Ja(en,Bt)),Ec=new io(en,Bt,s,e),Ec.updateGtaoMaterial({radius:.06,distanceExponent:1.5,thickness:1.2,scale:1}),Ec.blendIntensity=.85,Zn.addPass(Ec),Zn.addPass(new tc),Zn.setPixelRatio(et.getPixelRatio()),Zn.setSize(s,e)}function Bm(){mr?(Zn||Vb(),Zn.render()):et.render(en,Bt)}function zm(){yo&&(Uc.value=performance.now()/1e3,nn=!0);let s=hi.update();(nn||s)&&(nn=!1,Bm()),requestAnimationFrame(zm)}(async function(){ub(),hb(),Gh(),zm();for(let t of Dc)yr[t.id]=t.on;_r("Cargando datos\u2026"),[Ai,Nh,ps]=await Promise.all(["data/meta.json","data/es.json","data/innervation.json"].map(t=>fetch(t).then(n=>n.json())));try{Mo=await(await fetch("data/layers.json")).json()}catch{Mo={}}try{_o=await(await fetch("data/lymphatics.json")).json(),_o.forEach(t=>{Nh[t.b]=t.es})}catch{_o=[]}try{Cc=await(await fetch("data/tendons.json")).json()}catch{Cc=null}try{xr=await(await fetch("data/capas_musculares.json")).json(),delete xr._ayuda}catch{xr={}}Ic(),zb(),Nb(),En(),ei(),await $n("1"),vo=zt(Pt[1]),Fh("ant"),await $n("4"),$n("2"),Ie("#cutAxis").onchange=Ih,Ie("#cutPos").oninput=Ih;let e=document.getElementById("bHQ");e&&e.classList.toggle("on",mr),e&&(e.onclick=()=>{mr=!mr,e.classList.toggle("on",mr),nn=!0}),window.__atlas={showAttachments:Mm,applyCut:Ih,computeTendons:rb,setFlow:t=>{yo=t,t||(Uc.value=0,nn=!0)},frameList:(t,n)=>hn(zt(t),n?new w(...n):void 0),openMuscles:zh,soloMuscle:Lm,computeLayers:Ob,showDermatomes:So,renderNow:Bm,computeFibers:ym,setHQ:t=>{mr=t,nn=!0},meshes:tn,select:vr,showNerve:Wh,NERVES:ps,peelLayer:Dm,setView:Fh,loadSys:$n,sysOn:yr,refresh:Ze,buildLayerUI:Ic}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
