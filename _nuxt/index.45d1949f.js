import{o as r,e as u,f as e,i as m,j as g,h,t as c,y,z as x,k as v,m as p,w,A as b,B as $,u as d,C as B,F as R,D as j,E as A,c as C}from"./entry.e8288646.js";import{u as I}from"./asyncData.6d3fc13c.js";const S={class:"flex flex-col justify-between h-full"},D={class:""},N=["src","alt"],V={class:"font-bold hover:underline pt-3"},L={class:"py-3"},z={class:"text-sm text-justify"},M={class:"flex justify-between place-items-center"},T={class:"font-bold text-sm"},F={__name:"BookCard",props:["book","id"],setup(t){function a(o){return o.slice(0,128)+"..."}function n(o){return o>=4?"lg:col-span-2 lg:row-span-2":o>=2&&o<4?"lg:col-span-2":o<2?"lg:col-span-1 lg:row-span-1":""}return(o,f)=>{const s=v;return t.book?(r(),u("div",{key:0,class:y(["p-4 bg-gray-50 rounded-lg select-none",n(Number(t.book.averageRating))])},[e("div",S,[e("div",D,[e("img",{src:t.book.imageLinks.thumbnail,alt:`${t.book.title} Image`,class:"m-auto w-fit h-32"},null,8,N),e("h4",V,[m(s,{to:`book/${t.id}`},{default:g(()=>[h(c(t.book.title),1)]),_:1},8,["to"])])]),e("div",L,[e("p",z,c(a(t.book.description)),1)]),e("div",M,[e("p",T,c(t.book.averageRating)+c(t.book.averageRating?"\u2605":""),1),m(s,{book:t.book,to:`book/${t.id}`,class:"text-white px-3 py-1 text-sm fond-semibold bg-red-700 hover:bg-red-600 rounded-r-lg"},{default:g(()=>[h(" Learn More ")]),_:1},8,["book","to"])])])],2)):x("",!0)}}},G={class:"h-screen bg-gray-800"},Y={class:"flex justify-center bg-gray-800 py-12"},E={class:"text-center"},K=e("h1",{class:"my-3 text-2xl fond-bold text-white"},"Bookoholic - Your Movie Guru",-1),O={class:"flex justify-center"},P={class:"mt-5 px-8 w-full xl:w-4/5 2xl:w-2/3 m-auto grid grid-cols-1 lg:grid-cols-5 gap-4"},H={__name:"index",async setup(t){let a,n;const o="https://www.googleapis.com/books/v1/volumes?q=intitle:",f="AIzaSyAtHsLjOsjS_K_IOGWVM0fWFlpDYGPaIeA";let s=p("conflict");function _(){s.value=""}const{data:k}=([a,n]=w(()=>I(()=>$fetch(`${o}${s.value}&maxResults=15&key=${f}`),{watch:[s]},"$PslAyef5YX")),a=await a,n(),a);return(U,i)=>(r(),u("div",G,[e("div",Y,[e("div",E,[K,e("div",O,[b(e("input",{type:"text","onUpdate:modelValue":i[0]||(i[0]=l=>B(s)?s.value=l:s=l),placeholder:"Search Title...",class:"bg-gray-50 h-10 px-3 lg:w-72"},null,512),[[$,d(s)]]),e("button",{class:"bg-yellow-400 text-black font-semibold w-16 h-10 ml-1",onClick:i[1]||(i[1]=l=>_())},"Reset ")]),e("div",P,[d(s)?(r(!0),u(R,{key:0},j(d(k).items,l=>b((r(),C(F,{key:l,book:l.volumeInfo,id:l.id,class:"h-full"},null,8,["book","id"])),[[A,typeof l.volumeInfo.averageRating<"u"]])),128)):x("",!0)])])])]))}};export{H as default};
