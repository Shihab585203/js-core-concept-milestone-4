const brand = [
    { Name: "Xiomi", Camera: 64, Storage: "128gb", price: 22000, color: "silver"  },
    { Name: "samsung", Camera: 48, Storage: "64gb", price: 26000, color: "silver"  },
    { Name: "Nokia", Camera: 48, Storage: "64gb", price: 36000, color: "silver"  },
    { Name: "walton", Camera: 48, Storage: "64gb", price: 19000, color: "silver"  },
    { Name: "HTC", Camera: 48, Storage: "64gb", price: 32000, color: "silver"  },
    { Name: "Huawei", Camera: 48, Storage: "64gb", price: 14000, color: "silver"  },
];

function cheapestPhone(phones) {
    let cheapest = brand[0];
    for(let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if(phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const result = cheapestPhone(brand);
console.log(result);