/* 
** The Final Problem **
Finally, hackers have managed to access the database and have corrupted it. But it seems they have left a hidden message in the database. Can you find it?

Our database is in .csv format. The columns areid,username,email,age,location.

A user is only valid if:

- id: exists and is alphanumeric
- username: exists and is alphanumeric
- email: exists and is valid (follows the pattern user@domain.com)
- age: is optional but if it appears it is a number
- location: is optional but if it appears it is a text string
Examples:

Entry: 1a421fa,alex,alex9@gmail.com,18,Barcelona
Result: ✅ Valid

Entry: 9412p_m,maria,mb@hotmail.com,22,CDMX
Result: ❌ Invalid (id is not alphanumeric, the _ is extra)

Entry: 494ee0,madeval,mdv@twitch.tv,,
Result: ✅ Valid (age and location are optional)
Entry: 494ee0,madeval,twitch.tv,22,Montevideo
Result: ❌ Invalid (email is not valid)
** How to Solve It **
1. Analyze the list of database entries and detect the invalid ones:https://codember.dev/data/database_attacked.txt

2. Find the first letter of the username of all invalid users. Gather them in the order of appearance and uncover the hidden message. Then send it with submit. For example:
submit att4ck
*/

function solution(text) {
  const arr = text.split("\n");
  let res = "";
  const idRegx = /^[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*[a-zA-Z0-9]$/; ///^[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$/;
  const usernameRegx = /[a-zA-Z0-9]/;
  const emailRegx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  for (let i = 0; i < arr.length; i++) {
    const db = arr[i].split(",");
    if (
      !db[0] ||
      !idRegx.test(db[0]) ||
      !db[1] ||
      !usernameRegx.test(db[1]) ||
      !db[2] ||
      !emailRegx.test(db[2]) ||
      (db[3] && typeof +db[3] !== "number") ||
      (db[4] && typeof db[4] !== "string")
    )
      res += db[1][0];
  }

  return res === "" ? "Valid" : res;
}
const text = `PYmt8hd,jdcrLI,jdcrli@gmail.com,27,London
aN21Mhj,yoHrWHE,oHrWHE@example,40,
,oHrWHE,oHrWHE@a.com,a,
2RVxZLzIcs,jvNCJj,jvncjj@hotmail.com,45,Berlin
XUOUmi9,utuPMN,htuPMN@invalid,,Berlin
UXMmi9,htuPMN,@@@.com,,Berlin
Y2FCxmg*E4L,4vZtIH,dvztih@gmail.com,27,London
Y2FgXXE4L,DvZtIH,dvztih@gmail.com,27,London
wYR2DOE,vsWtBk,vsWtBk@example,,Paris
(MIDUni,3vsWtBk,midu@gmail.com,,Barcelona
G1WV7gK,RFHWCi,rfhwci@yahoo.com,53,Sydney
OQc_YTY,bGyjPo,,,BuenosAires
OQc_YTY,eGyjPo,bGyjPo@example,,Caracas
uzHXNR,IFLUDB,ifludb@hotmail.com,46,Madrid
u56gsjt,eBbEBV,eBbEBV@invalid,49,
QH87Wd,fImzHM,fimzhm@gmail.com,38,Madrid
Dhy92jh,pB1P64,pB1P64@hotmail.com,52,CDMX
6DkGW62P,ldmcDE,ldmcde@gmail.com,33,Madrid
B89dht_,nceCp2,nceCp2@invalid,68,Rome
O8TsZ7,jauTbB,jautbb@gmail.com,45,New York
tIR9N,yOkZBg,yokzbg@yahoo.com,68,Tokyo
1KN4ZOe,emuBwK,emubwk@gmail.com,27,London
2efL9,zAPgvK,zapgvk@outlook.com,33,Paris
f9Fw1q6tWq,djrWrL,djrwrl@outlook.com,20,New York
weoFk,prYGAC,hrygac@yahoocom,19,Sydney
mZf2R,LnSBAh,lnsbah@outlook.com,18,Paris
KIuLH,kKpddF,kkpddf@outlook.com,32,Rome
4359Rm,LAlhya,lalhya@outlook.com,62,London
KYQZq9yg,ZTvLpI,ztvlpi@outlook.com,27,Madrid
9hC&UV8,wWZxgp,mwzxgp@yahoo.com,49,Madrid
ra7wsGC,DFgbNn,dfgbnn@yahoo.com,40,New York
0=uUIzOsDN,ngPCGN,jgpcgn@gmail.com,57,Rome
zaor8f,WXQwzY,wxqwzy@yahoo.com,27,Paris
KTMoYqn,ZFSwLp,zfswlp@yahoo.com,57,Berlin
OJMgD,mmJyyc,mmjyyc@yahoo.com,30,Paris
J49HyU,udMyki,udmyki@hotmail.com,35,Rome
ZBiXSV,gQXcjA,gqxcja@yahoo.com,68,Paris
lP6GLm6,ljiCsY,ljicsy@gmail.com,45,Berlin
neZAj,bBIbVF,bbibvf@gmail.com,58,London
9uLq2KwoIr,OWXXBl,owxxbl@outlook.com,46,Sydney
RELT7fgmnD,dplQIl,,58,New York
HDKVi,AxLzOk,axlzok@hotmail.com,68,New York
Mp7lqou9z,SJzlEy,sjzley@gmail.com,63,London
6rDP6BCQv,nnqyAa,nnqyaa@outlook.com,45,New York
OyH2qjKxZ,nwWZuw,nwwzuw@yahoo.com,56,Rome
L8DHMmE44p,MoAcMe,moacme@hotmail.com,67,Paris
TlSmF,fPmepA,fpmepa@outlook.com,42,Rome
E1QH9ci7,hlyLQF,hlylqf@outlook.com,41,New York
mYOpY23,SHmAju,shmaju@hotmail.com,64,Rome
XAEJitTlla,qrpsKE,qrpske@hotmail.com,52,Rome
tS4XE,DoxbRW,doxbrw@outlook.com,26,Tokyo
zGmt6Bg,JXcvKW,jxcvkw@hotmail.com,68,Madrid
4t7td1EpM,cnxBsn,cnxbsn@outlook.com,42,Madrid
USYVWP9,Zhszyq,zhszyq@gmail.com,45,Berlin
xPsBdFX,guBqHO,gubqho@gmail.com,56,Berlin
vjs0muFgD,GlNbyN,glnbyn@hotmail.com,43,Paris
MJjqv,lfmiGU,lfmigu@outlook.com,60,London
jZlHAbXel,YOfnFV,yofnfv@hotmail.com,38,Tokyo
IykL8QNPN,ndBTcB,ndbtcb@gmail.com,28,Berlin
Vq7WI4,CLCYRN,clcyrn@gmail.com,25,Tokyo
utGGulT,RdmXuh,rdmxuh@yahoo.com,68,Rome
FQeos5,aMlzfe,amlzfe@gmail.com,43,Berlin
bJKfMUASk,RnEDLz,rnedlz@outlook.com,36,Berlin
p3GXT0,Meohff,meohff@gmail.com,27,Madrid
TCsiyDQpIl,FdMArs,fdmars@outlook.com,63,Berlin
cb6RRrx,ZCyfir,zcyfir@gmail.com,45,Rome
Fm7V1tR34,VJlNXN,vjlnxn@hotmail.com,32,Rome
VY5EHZHY,EfaHWA,efahwa@outlook.com,25,New York
EkCCjg5e9,JvowjF,jvowjf@outlook.com,68,Paris
KVJd37LC,IzgjKS,izgjks@gmail.com,31,Paris`;
console.log(solution(text));

module.exports = { solution, text };
