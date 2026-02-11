
import { NavItem, DetailPageContent } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#/' },
  { label: 'De ce FOCUS?', href: '#/de-ce-focus' },
  { label: 'Cum se desfășoară?', href: '#/cum-se-desfasoara' },
  { label: 'Articole', href: '#/articole' },
  { label: 'Cum poți participa', href: '#/cum-poti-participa' },
];

export const PAGE_CONTENTS: Record<string, DetailPageContent> = {
  'de-ce-focus': {
    title: 'De ce filosofie practica?',
    blocks: [
      {
        type: 'testimonial-slider',
        testimonials: [
          { name: 'Radu', text: 'Pare un hibrid intre filosofia teoretica, foarte abstracta si practica ce implica doar atentia.' },
          { name: 'Marcel', text: 'Pentru ca ma pune sa ma gandesc mai altfel.' },
          { name: 'Cristina', text: 'Mi se pare un concept interesant pentru ca, din punctul meu de vedere, antreneaza gandirea, logica si rationalizarea.' },
          { name: 'Luiza', text: 'Pentru a-mi structura gandirea si a purta dialoguri cu sens.' },
          { name: 'Luci', text: 'Pentru a fi capabil sa despic firul in 4 cu precizie si acuratete.' },
          { name: 'Anca', text: 'Sa ma inteleg mai bine pe mine si sa-i inteleg mai bine pe ceilalti si lumea in care traiesc. Filosofia practica ne invata sa dialogam.' },
          { name: 'Andie', text: 'Pentru a incerca sa simplific exprimarea gandurilor si ideilor proprii.' }
        ]
      },
      { type: 'h2', value: 'Arta conversației cu sens' },
      { type: 'p', value: 'Filosofia practică este o formă de reflecție prin dialog rațional, aplicată vieții și cunoașterii de sine. Este un antrenament al conștiinței și al spiritului critic prin întrebare, suspendare a judecății și conștientizare. Exersează luciditatea asupra acțiunilor și comportamentului de zi cu zi, un meșteșug al minții care ne modelează felul de a fi, de a comunica și de a lua decizii conștiente.' },
      { type: 'h3', value: 'Metoda socratică – o artă marțială și o activitate de exersare intensă a minții' },
      { type: 'p', value: 'Filosofia practică și metoda socratică deschide, creează și lărgește perspective; ea nu justifică nimic, ci ordonează haosul și ideile. Fiindcă filosofia presupune distanță și discernământ în reflecție, învățăm să ne privim din exterior, dialogând cu alții pentru a deconstrui probleme și găsim spațiu pentru ca rațiunea să-și exerseze libertatea.' },
      { type: 'p', value: 'Rațiunea nu produce confort, realitatea lovește, claritatea necesită efort, iar omul este invitat să-și vadă limitele suportând tensiunea adevărului. În dialog existențial nu ne urmăm doar reacțiile, sentimentele și preferențele, ci ne provocăm să fim critici. Astfel, gândind clar și cumpătat, ne conturăm ființa și ieșim din pasivitate, obsesie și compulsie.' },
      { type: 'p', value: 'Cu o pretenție de obiectivitate, filosofia practică ne ajută să formulăm idei care au sens atât în ansamblul vieții individuale, cât și în cel al realității împărtășite cu alții.' }
    ]
  },
  'cum-se-desfasoara': {
    title: 'Cum se desfășoară?',
    subtitle: 'Pentru a crea un mediu favorabil dialogului semnificativ, respectăm anumite principii.',
    blocks: [
      { type: 'h2', value: 'Principii ale filosofiei practice' },
      { type: 'ul', items: [
          'Nu rămânem în indecizie sau neutralitate – este încurajat angajamentul față de o idee atunci când ne confruntăm cu o dilemă sau cu o alegere, pentru ca dialogul să avanseze. Doar o idee asumedă poate fi examinată.',
          'Verificăm dacă o întrebare a primit răspuns – este dezirabil să ajungem la un răspuns, deoarece acesta creează responsabilitate în interlocutor și sprijină înțelegerea reciprocă. Metoda socratică este cumulativă, fiecare răspuns creează o obligație logică.',
          'Folosim simțul comun – apelăm la înțelepciunea practică și la raționamentul general acceptat într-un context cultural, pentru a recunoaște erorile logice și a evita sofismele.',
          'Aplicăm briciul lui Occam – evităm complexitatea inutilă și ne abținem de la introducerea detaliilor în discuții atunci când nu este necesar, promovând simplitatea și limbajul direct.',
          'Articulăm idei complete – formulăm ideile în mod clar și coerent, evitând afirmațiile vagi sau incomplete, care nu dezvăluie sensul sau intenția. Ne asumăm un angajament față de claritate și înțelegere, pas cu pas înlăturăm ceața verbală.',
          'Prezentăm ideile în mod asumat – adoptăm puncte de vedere, generăm idei și înaintăm ipoteze. Angajamentul contribuie la crearea sensului prin stabilirea unor repere în discuție.',
          'Încurajăm gândirea abstractă – evităm situațiile în care oferim doar exemple multiple sau narațiuni personale care repetă fapte particulare, fără a urmări identificarea principiilor fundamentale, analiza sau formularea concluziilor.',
          'Evităm fixarea pe viziuni singulare – îmbrățișăm natura dialectică a conceptelor, rămânem flexibili și deschiși în discuții, prevenind astfel atașamentul rigid față de anumite perspective.'
        ]
      },
      { type: 'h2', value: 'Unelte pe care le folosim' },
      { type: 'ul', items: [
          'Logica: Ideile aduse în discuție trebuie să fie coerente și consistente, astfel încât să poată fi evaluate și confruntate prin dialog. Identificăm contradicțiile și clarificăm conceptele.',
          'Rațiunea: Instrumentul prin care argumentăm conștient și fundamentat, făcând vizibile premisele și motivarea din spatele afirmațiilor noastre. Credința presupune acceptarea tacită; rațiunea cere explicarea.',
          'Dialectica: Creează spațiul în care opozițiile pot fi examinate fără a fi anulate. Identificăm compatibilitatea dintre contrarii și explorăm spectrul dintre extreme.',
          'Întrebarea: În metoda socratică, întrebarea generează conștiință prin identificarea motivelor și a criteriilor care stau la baza unei afirmații. Urmărim claritatea conceptuală.',
          'Identificarea presupozițiilor: Oamenii gândesc din presupuneri tacite. Dialogul rămâne decorativ dacă acestea nu sunt scoase la suprafață pentru a fi examinate.',
          'Încălcarea regulilor ca act critic: Suspendarea critică a regulilor pentru a nu fi urmate dogmatic. Eroarea este un semnal că presupunerile noastre sunt insuficiente sau aplicate mecanic.'
        ]
      }
    ]
  },
  'articole': {
    title: 'Articole',
    subtitle: 'Note de subsol ale conversațiilor noastre.',
    blocks: [
      { 
        type: 'article-list', 
        articles: [
          { title: 'Puterea întrebării în era certitudinii', date: '12 Oct 2023', category: 'Filosofie' },
          { title: 'Socrates în era digitală: Putem avea un dialog online?', date: '05 Noi 2023', category: 'Tehnologie' },
          { title: 'Elogiul lentorii: De ce gândirea rapidă ne trădează', date: '20 Dec 2023', category: 'Psihologie' },
          { title: 'Arta de a nu avea dreptate', date: '15 Ian 2024', category: 'Etică' },
          { title: 'Saloanele bucureștene de ieri și de azi', date: '02 Feb 2024', category: 'Istorie' }
        ]
      }
    ]
  },
  'cum-poti-participa': {
    title: 'Cum poți participa?',
    subtitle: 'Calea către dialog începe cu o prezență.',
    blocks: [
      { type: 'h2', value: 'Îți asumi un angajament' },
      { type: 'ul', items: [
          'De timp: fii punctual și rămâi pe toată durata discuției.',
          'De prezență: ascultă activ și implică-te cu atenție, aici și acum.',
          'De asumare și implicare: nu rămâne pasiv. Toate perspectivele sunt binevenite și valoroase.'
        ]
      },
      { type: 'h2', value: 'Contribui la un teren comun' },
      { type: 'ul', items: [
          'Fiecare salon are un facilitator care inițiază și veghează dialogul.',
          'Folosim doar prenumele participanților, fără credențiale sau titluri profesionale.',
          'Nicio voce nu trebuie să domine discuția.',
          'Vorbim pe rând. Dacă vrei să intervii, anunță-ți intenția prin ridicarea mâinii.',
          'Întrebările sunt încurajate.',
          'Construim argumente plecând de la ideile celorlalți, fără salturi conceptuale.'
        ]
      },
      { type: 'h2', value: 'Arăți respect' },
      { type: 'ul', items: [
          'Față de facilitator și membrii grupului.',
          'Față de spațiul care găzduiește saloanele socratice.',
          'Față de curiozitate și efortul depus de fiecare în căutarea clarității.'
        ]
      },
      { type: 'h2', value: 'Spiritul dialogului' },
      { type: 'p', value: 'Amintește-ți că scopul saloanelor socratice este dialogul. Nu ne întâlnim pentru a ne etala expertiza sau pentru a face networking, ci pentru a explora idei împreună și pentru a face antrenament mental. Cele mai valoroase realizări se regăsesc adesea în puncte de vedere diferite, conexiuni neașteptate și curiozitate pură.' },
      { type: 'p', value: 'Prin respectarea acestor principii, putem crea un spațiu în care ideile pot înflori și în care un dialog semnificativ poate apărea natural.' },
      { type: 'h2', value: 'Alătură-te comunității' },
      { type: 'p', value: 'Pentru a-ți exprima interesul de a participa la saloanele socratice, lasă-ne adresa ta de email. Te vom contacta pentru a afla mai multe despre tine și pentru a-ți oferi mai multe detalii.' }
    ]
  }
};