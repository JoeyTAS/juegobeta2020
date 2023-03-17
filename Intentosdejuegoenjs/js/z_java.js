

document.getElementById('hormiga').addEventListener('mouseover',SumarPuntos);
document.getElementById('mosca').addEventListener('mouseover',SumarPuntos);
puntos = 0;
tiempo = 60;
necesario = 30;
// AQJI CREAMOS UNA FUNCION PARA SUMAR PUNTOS
function SumarPuntos(){
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos: " + puntos + "/" + necesario;
    
    if(puntos == 30){
        alert("Enhorabuena, Salvaste al Mundo!, Tienes el Respeto de todos! " );
    
        
    }
    
}

// AQUI CREAMOS LA FUNCION PARA RESTAR TIEMPO





setInterval(()=>{
	segundos--;
	document.getElementById("tiempo").textContent = segundos;
	if (segundos == 0) {
		alert("se te acabó el tiempo");
		puntos = 0;
	    document.getElementById("puntos").textContent = puntos;
		segundos = 10;
	}
	
} ,1000)
