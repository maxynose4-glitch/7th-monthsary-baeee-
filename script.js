*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:'Poppins',sans-serif;
background:linear-gradient(135deg,#ffd6e8,#ffeef6);
overflow:hidden;
height:100vh;
color:#5b2d42;
}

/* Floating Hearts */
#hearts{
position:fixed;
width:100%;
height:100%;
pointer-events:none;
overflow:hidden;
}

#hearts::before,
#hearts::after{
content:"💗 💕 💖 💓 🤍";
position:absolute;
font-size:30px;
animation:float 15s linear infinite;
opacity:.6;
white-space:nowrap;
}

#hearts::after{
top:50%;
animation-duration:20s;
}

@keyframes float{
0%{
transform:translateY(100vh);
}
100%{
transform:translateY(-120vh);
}
}

.page{
display:none;
justify-content:center;
align-items:center;
flex-direction:column;
height:100vh;
padding:20px;
text-align:center;
animation:fade .8s;
}

.page.active{
display:flex;
}

@keyframes fade{
from{
opacity:0;
transform:scale(.95);
}
to{
opacity:1;
transform:scale(1);
}
}

/* Book */

.book{
background:#fff7fb;
padding:40px;
border-radius:25px;
box-shadow:0 15px 35px rgba(0,0,0,.2);
max-width:380px;
}

.book h1{
font-size:34px;
color:#ff4d8d;
margin-bottom:15px;
}

.book h2{
margin-bottom:25px;
color:#9b4d72;
}

/* Envelope */

.envelope{
width:260px;
height:170px;
background:#8B5A2B;
border-radius:12px;
position:relative;
cursor:pointer;
transition:.4s;
box-shadow:0 10px 25px rgba(0,0,0,.25);
}

.envelope:hover{
transform:scale(1.05);
}

.envelope::before{
content:"";
position:absolute;
top:-85px;
left:0;
border-left:130px solid transparent;
border-right:130px solid transparent;
border-bottom:85px solid #a46d37;
}

.front{
padding-top:55px;
color:white;
font-weight:bold;
font-size:20px;
}

/* Letter */

.paper{
background:#d9b78d;
padding:30px;
border-radius:18px;
max-width:650px;
box-shadow:0 10px 25px rgba(0,0,0,.2);
font-family:'Patrick Hand',cursive;
font-size:28px;
line-height:1.7;
}

/* Photos */

.photos{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:15px;
margin:25px 0;
}

.photos img{
width:160px;
height:210px;
object-fit:cover;
border-radius:15px;
border:6px solid white;
box-shadow:0 10px 20px rgba(0,0,0,.2);
transition:.3s;
}

.photos img:hover{
transform:rotate(-3deg) scale(1.05);
}

/* Buttons */

button{
padding:15px 35px;
font-size:20px;
border:none;
border-radius:50px;
background:#ff5fa2;
color:white;
cursor:pointer;
margin-top:25px;
transition:.3s;
font-weight:bold;
}

button:hover{
transform:scale(1.08);
background:#ff2d7c;
}

/* Wheel */

#wheel{
margin:30px;
display:flex;
justify-content:center;
}

.circle{
width:280px;
height:280px;
border-radius:50%;
background:conic-gradient(
#ff6aa6 0deg 60deg,
#ff95c2 60deg 120deg,
#ff7fb7 120deg 180deg,
#ff5e9c 180deg 240deg,
#ff91bf 240deg 300deg,
#ff6aa6 300deg 360deg
);
display:flex;
justify-content:center;
align-items:center;
font-size:45px;
font-weight:bold;
color:white;
border:10px solid white;
box-shadow:0 10px 25px rgba(0,0,0,.25);
transition:transform 4s ease-out;
}

#answer{
margin-top:30px;
font-size:42px;
font-weight:bold;
color:#ff0066;
line-height:1.5;
}

/* Final Page */

#final h1{
font-size:58px;
color:#ff2d7c;
margin-bottom:20px;
}

#final h2{
margin:10px;
}

#final h3{
margin-top:25px;
color:#c2185b;
}

/* Mobile */

@media(max-width:600px){

.paper{
font-size:22px;
}

.photos img{
width:140px;
height:180px;
}

.book{
width:90%;
}

.circle{
width:230px;
height:230px;
font-size:35px;
}

}