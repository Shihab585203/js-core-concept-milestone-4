// Ticket Price:

// first 100 tickets---100tk
// 101 - 200 tickets -- 90tk
// 200+ tickets = 70tk

function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 70;
  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100Rate;
    const totalPrice = first100Price + restTicketPrice;
    return totalPrice;
  } else {
    const first100Price = 100 * first100Rate;
    const second100Price = 100 * second100Rate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity - restTicketRate;
    const totalPrice = first100Price + second100Price + restTicketPrice;
    return totalPrice;
  }
}

const price = ticketPrice(201);
console.log(price);

var array = [10,11,12,13,14,15,16,17];

var lastem = array[array.length-1];
console.log(lastem);







function longest_str_in_array(arra)
  {
    var max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var maxi = arra[i].length;
        if (maxi > max_str) {
            ans = arra[i];
            max_str = maxi;
        }
    }
    return ans;
}
console.log(longest_str_in_array(["ab", "a", "abcd"]));