let total_tickets = 50;
let tickets_booked = 0;
function ticket_booked(){
    if(total_tickets>0){
    total_tickets-=1;
    tickets_booked+=1;
    document.getElementById("booked").innerHTML=tickets_booked;
    document.getElementById("tickets").innerHTML=total_tickets;
    if(total_tickets===0){
        const button = document.getElementById("button");
        button.disabled=true;
        button.innerText="Sold Out!"
    }
    }
}