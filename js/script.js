function signup () {  
    var nom=document.getElementById("idNom").value;
    var prenom=document.getElementById("idPrenom").value;
    var email=document.getElementById("idEmail").value;
    var password=document.getElementById("idPassword").value;
    var tel=document.getElementById("idTel").value;
    var adresse=document.getElementById("idAdresse").value;
    var paye=document.getElementById("idPaye").value;
    
    //creat json object
    var utilisateurTab=JSON.parse(localStorage.getItem('utilisateur')||'[]');
    var utilisateur ={
        id:generateId(utilisateurTab)+1,
        Nom:nom,
        
        Prenom:prenom,
        email:email,
        Password:password,
        Tel:tel,
        Adresse:adresse,
        Paye:paye

    };
    //save object to LS
    
    utilisateurTab.push(utilisateur);
    localStorage.setItem('utilisateur',JSON.stringify(utilisateurTab));

}
function generateId (T) { 
    var max;
    if (T.length == 0) {
        max = 0;
        
    } else {
         max=T[0].id;
    for (var i = 0; i < T.length; i++) {
        if (T[i].id>max) {
            max=T[i].id;
            
        }
        
    }
    
        
    }
    return max;
    

 }
 function logine(){
    var email=document.getElementById('idEmail').value;
    var password=document.getElementById('idPassword').value;
    
    var utilisateurTab=JSON.parse(localStorage.getItem('utilisateur'))
    var findeutilisateur;
    for (var i = 0; i < utilisateurTab.length; i++) {
        if (utilisateurTab[i].email==email&& utilisateurTab[i].Password==password) {
            findeutilisateur=utilisateurTab[i];
            break;
            
        }
        
    }
    if (findeutilisateur) {
        localStorage.setItem('connectedUserId',findeutilisateur.id);
        location.replace("index.html");
    } else{
        document.getElementById('loginEreeur').innerHTML='please check email and password';
        
    }
 }
 function description(){
     // recuperer les input
     var nomHotel=document.getElementById('nomHotel').value;
     var nbrEtoil=document.getElementById('nbr').value;
     var adresse=document.getElementById('adr').value;
     var hotelTab=JSON.parse(localStorage.getItem('hotel')||'[]');
     //creat json object
     var hotel={
        id:generateId(hotelTab)+1,
         nomHotel:nomHotel,
         adresse:adresse,
         nbrEtoil:nbrEtoil
     }
     // save to ls
     hotelTab.push(hotel);
     localStorage.setItem('hotel',JSON.stringify(hotelTab));
    
     

     
 }
 //function display hotel that generate html bloc t.length fois
 function displayHotel () {
     var hotelTab=JSON.parse(localStorage.getItem('hotel')||'[]');
     var content='';
     for (let i = 0; i < hotelTab.length; i++) {
         content=content+`   <div class="row">
         <div class="col-md-3">
             <div class="room-img">
                 <div class="box12">
                     <img src="img/room/room-3.jpg">
                     <div class="box-content">
                         <h3 class="title">hotel tunis</h3>
                         <ul class="icon">
                             <li><a href="#" data-toggle="modal" data-target="#modal-id"><i class="fa fa-link"></i></a></li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
         <div class="col-md-6">
             <div class="room-des">
                 <h3><a href="#" data-toggle="modal" data-target="#modal-id">${hotelTab[i].nomHotel}
                 </a></h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 <ul class="room-size">
                     <li><i class="fa fa-arrow-right"></i>Size: 200 sq ft </li>
                     <li><i class="fa fa-arrow-right"></i>Beds: 2 Single(s) </li>
                 </ul>
                 <ul class="room-icon">
                     <li class="icon-1"></li>
                     <li class="icon-2"></li>
                     <li class="icon-3"></li>
                     <li class="icon-4"></li>
                     <li class="icon-5"></li>
                     <li class="icon-6"></li>
                     <li class="icon-7"></li>
                     <li class="icon-8"></li>
                     <li class="icon-9"></li>
                     <li class="icon-10"></li>
                 </ul>
             </div>
         </div>
         <div class="col-md-3">
             <div class="room-rate">
                 <h3>${hotelTab[i].adresse}</h3>
                 <h1>${hotelTab[i].nbrEtoil}*</h1>
                 <a href="#"></a>
             </div>
         </div>
     </div>`


         
         
     }
     document.getElementById("hotelDiv").innerHTML=content

   }