/* ==========================================================
   KAJOL JULA PORTFOLIO V2
   PART 1
========================================================== */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;600;700;800&display=swap');

:root{

--primary:#032A61;
--accent:#FFD200;
--dark:#111827;
--gray:#6B7280;
--light:#F8FAFC;
--white:#FFFFFF;

--radius:18px;

--shadow:
0 10px 35px rgba(15,23,42,.08);

--transition:.35s ease;

}

/* RESET */

*{
margin:0;
padding:0;
box-sizing:border-box;
}

html{

scroll-behavior:smooth;

}

body{

font-family:'Inter',sans-serif;

background:var(--light);

color:var(--dark);

line-height:1.7;

overflow-x:hidden;

}

/* CONTAINER */

.container{

width:min(1150px,90%);

margin:auto;

}

/* TYPOGRAPHY */

h1,h2,h3,h4{

font-family:'Poppins',sans-serif;

font-weight:700;

line-height:1.2;

}

p{

color:var(--gray);

}

a{

text-decoration:none;

color:inherit;

}

img{

max-width:100%;

display:block;

}

/* ==========================
HEADER
========================== */

.header{

position:fixed;

top:0;

left:0;

width:100%;

background:rgba(255,255,255,.88);

backdrop-filter:blur(18px);

z-index:1000;

border-bottom:1px solid rgba(0,0,0,.05);

}

.header .container{

display:flex;

justify-content:space-between;

align-items:center;

height:78px;

}

.logo{

font-size:1.4rem;

font-weight:700;

color:var(--primary);

font-family:'Poppins';

}

.nav-links{

display:flex;

list-style:none;

gap:35px;

}

.nav-links a{

font-weight:500;

transition:var(--transition);

position:relative;

}

.nav-links a:hover{

color:var(--primary);

}

.nav-links a::after{

content:"";

position:absolute;

left:0;

bottom:-6px;

width:0;

height:2px;

background:var(--accent);

transition:.3s;

}

.nav-links a:hover::after{

width:100%;

}

/* Resume Button */

.resume-btn{

padding:12px 24px;

background:var(--primary);

color:white;

border-radius:50px;

font-weight:600;

transition:.3s;

}

.resume-btn:hover{

transform:translateY(-3px);

box-shadow:var(--shadow);

}

/* ==========================
HERO
========================== */

.hero{

min-height:100vh;

display:flex;

align-items:center;

padding-top:90px;

background:
linear-gradient(
180deg,
#ffffff 0%,
#f8fbff 100%
);

}

.hero-grid{

display:grid;

grid-template-columns:1fr 1fr;

gap:70px;

align-items:center;

}

.badge{

display:inline-block;

padding:8px 18px;

background:#e9f0ff;

color:var(--primary);

border-radius:40px;

font-size:.9rem;

font-weight:600;

margin-bottom:25px;

}

.hero h1{

font-size:4rem;

margin-bottom:25px;

}

.hero h1 span{

color:var(--primary);

display:block;

}

.hero p{

font-size:1.15rem;

max-width:600px;

margin-bottom:35px;

}

.hero-buttons{

display:flex;

gap:18px;

}

/* Buttons */

.primary-btn{

background:var(--primary);

color:white;

padding:16px 34px;

border-radius:50px;

font-weight:600;

transition:.3s;

}

.primary-btn:hover{

transform:translateY(-4px);

box-shadow:var(--shadow);

}

.secondary-btn{

border:2px solid var(--primary);

padding:16px 34px;

border-radius:50px;

font-weight:600;

color:var(--primary);

transition:.3s;

}

.secondary-btn:hover{

background:var(--primary);

color:white;

}

/* Profile */

.profile-card{

width:420px;

height:520px;

background:white;

border-radius:28px;

box-shadow:var(--shadow);

overflow:hidden;

margin-left:auto;

}

.profile-card img{

width:100%;

height:100%;

object-fit:cover;

}

/* ==========================
METRICS
========================== */

.metrics{

margin-top:-70px;

padding-bottom:100px;

}

.metric-grid{

display:grid;

grid-template-columns:repeat(4,1fr);

gap:25px;

}

.metric{

background:white;

padding:40px;

border-radius:20px;

text-align:center;

box-shadow:var(--shadow);

transition:.3s;

}

.metric:hover{

transform:translateY(-8px);

}

.metric h2{

font-size:3rem;

color:var(--primary);

margin-bottom:10px;

}

.metric p{

font-weight:500;

}

/* Sections */

.section{

padding:120px 0;

}

.section-title{

text-align:center;

margin-bottom:70px;

}

.section-title span{

letter-spacing:2px;

font-size:.85rem;

font-weight:700;

color:var(--accent);

}

.section-title h2{

font-size:2.8rem;

margin-top:15px;

max-width:700px;

margin-inline:auto;

}

.about-text{

font-size:1.15rem;

max-width:850px;

text-align:center;

margin:auto;

}

/* ==========================================================
   KAJOL JULA PORTFOLIO V2
   PART 2
========================================================== */

/* ==========================
SERVICES
========================== */

.service-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:30px;
}

.card{
    background:var(--white);
    padding:40px 30px;
    border-radius:var(--radius);
    box-shadow:var(--shadow);
    transition:var(--transition);
    border:1px solid rgba(0,0,0,.05);
}

.card:hover{
    transform:translateY(-10px);
    border-color:var(--accent);
    box-shadow:0 20px 40px rgba(15,23,42,.12);
}

.card h3{
    color:var(--primary);
    margin-bottom:15px;
    font-size:1.35rem;
}

.card p{
    font-size:.98rem;
}

/* ==========================
CASE STUDIES
========================== */

.cards-3{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:30px;
}

.case-card{
    background:var(--white);
    border-radius:var(--radius);
    padding:35px;
    box-shadow:var(--shadow);
    transition:var(--transition);
    border-top:5px solid var(--primary);
}

.case-card:hover{
    transform:translateY(-10px);
}

.case-card h3{
    color:var(--primary);
    margin-bottom:15px;
}

.case-card p{
    color:var(--gray);
}

/* ==========================
RESOURCES
========================== */

.resources{
    background:var(--white);
}

.resource-card{
    background:linear-gradient(135deg,#032A61,#05408F);
    color:white;
    padding:35px;
    border-radius:var(--radius);
    text-align:center;
    font-family:'Poppins',sans-serif;
    font-size:1.15rem;
    font-weight:600;
    transition:var(--transition);
    cursor:pointer;
}

.resource-card:hover{
    transform:translateY(-8px) scale(1.02);
}

/* ==========================
CONTACT
========================== */

.contact{
    padding:120px 0;
    text-align:center;
    background:linear-gradient(135deg,#032A61,#05408F);
    color:white;
}

.contact h2{
    color:white;
    font-size:2.8rem;
    margin-bottom:20px;
}

.contact p{
    color:rgba(255,255,255,.85);
    max-width:650px;
    margin:0 auto 40px;
}

.contact-buttons{
    display:flex;
    justify-content:center;
    gap:20px;
    flex-wrap:wrap;
}

.contact-buttons a{
    background:white;
    color:var(--primary);
    padding:15px 30px;
    border-radius:50px;
    font-weight:600;
    transition:var(--transition);
}

.contact-buttons a:hover{
    transform:translateY(-5px);
    box-shadow:0 15px 35px rgba(0,0,0,.2);
}

/* ==========================
FOOTER
========================== */

footer{
    background:#07172F;
    color:white;
    padding:30px 0;
    text-align:center;
}

footer p{
    color:rgba(255,255,255,.75);
}

/* ==========================
ANIMATIONS
========================== */

.card,
.case-card,
.metric,
.resource-card{
    animation:fadeUp .8s ease both;
}

@keyframes fadeUp{

    from{
        opacity:0;
        transform:translateY(30px);
    }

    to{
        opacity:1;
        transform:translateY(0);
    }

}

/* ==========================
SCROLLBAR
========================== */

::-webkit-scrollbar{
    width:10px;
}

::-webkit-scrollbar-track{
    background:#EDF2F7;
}

::-webkit-scrollbar-thumb{
    background:var(--primary);
    border-radius:20px;
}

::-webkit-scrollbar-thumb:hover{
    background:#021F4D;
}

/* ==========================
SELECTION
========================== */

::selection{
    background:var(--accent);
    color:#111;
}

/* ==========================
RESPONSIVE
========================== */

@media(max-width:992px){

    .hero-grid{
        grid-template-columns:1fr;
        text-align:center;
    }

    .hero-content{
        order:2;
    }

    .hero-image{
        order:1;
    }

    .profile-card{
        width:320px;
        height:400px;
        margin:auto;
    }

    .hero h1{
        font-size:3rem;
    }

    .metric-grid,
    .service-grid,
    .cards-3{
        grid-template-columns:repeat(2,1fr);
    }

}

@media(max-width:768px){

    .header .container{
        flex-direction:column;
        height:auto;
        padding:20px 0;
    }

    .nav-links{
        flex-wrap:wrap;
        justify-content:center;
        gap:15px;
        margin:20px 0;
    }

    .resume-btn{
        display:none;
    }

    .hero{
        padding-top:180px;
    }

    .hero h1{
        font-size:2.4rem;
    }

    .hero-buttons{
        flex-direction:column;
        align-items:center;
    }

    .metric-grid,
    .service-grid,
    .cards-3{
        grid-template-columns:1fr;
    }

    .metric{
        padding:30px;
    }

    .section{
        padding:90px 0;
    }

    .section-title h2{
        font-size:2rem;
    }

    .contact h2{
        font-size:2rem;
    }

}

@media(max-width:480px){

    body{
        font-size:15px;
    }

    .hero h1{
        font-size:2rem;
    }

    .profile-card{
        width:260px;
        height:330px;
    }

    .primary-btn,
    .secondary-btn{
        width:100%;
        text-align:center;
    }

}
