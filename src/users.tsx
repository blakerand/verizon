// prettier-ignore
const JohnSmith = {
    "firstName": "John",
    "lastName": "Smith",
    "planType": "Unlimited Ultimate",
    "phonesOnPlan": [
      {
        "phoneNumber": "123-456-7890",
        "brand": "Apple",
        "model": "iPhone 15 Pro Max",
        "4G Data Used": "10GB",
        "5G Data Used": "5GB",
        "Minutes Used": "954",
        "Messages Used": "170",
      },
      {
        "phoneNumber": "198-765-4321",
        "brand": "Samsung",
        "model": "Galaxy S23",
        "4G Data Used": "15GB",
        "5G Data Used": "10GB",
        "Minutes Used": "1200",
        "Messages Used": "200",
      },
    ],
    "job": "Software Engineer",
    "industry": "Technology",
};

// prettier-ignore
const JaneDoe = {
    "firstName": "Jane",
    "lastName": "Doe",
    "planType": "Unlimited Plus",
    "phonesOnPlan": [
      {
        "phoneNumber": "234-567-8901",
        "brand": "Apple",
        "model": "iPhone 15",
        "4G Data Used": "12GB",
        "5G Data Used": "8GB",
        "Minutes Used": "800",
        "Messages Used": "300",
      },
      {
        "phoneNumber": "345-678-9012",
        "brand": "Google",
        "model": "Pixel 6",
        "4G Data Used": "7GB",
        "5G Data Used": "4GB",
        "Minutes Used": "500",
        "Messages Used": "150",
      },
      {
        "phoneNumber": "456-789-0123",
        "brand": "Nokia",
        "model": "3310",
        "4G Data Used": "3GB",
        // Nokia 3310 is unlikely to use 5G, so not applicable here
        "Minutes Used": "300",
        "Messages Used": "50",
      },
    ],
    "job": "Management Consultant",
    "industry": "Business",
};

// prettier-ignore
const BobBuilder = {
    "firstName": "Bob",
    "lastName": "Builder",
    "planType": "Unlimited Welcome",
    "phonesOnPlan": [
      {
        "phoneNumber": "567-890-1234",
        "brand": "Samsung",
        "model": "Galaxy S24",
        "4G Data Used": "18GB",
        "5G Data Used": "14GB",
        "Minutes Used": "1000",
        "Messages Used": "250",
      },
      {
        "phoneNumber": "678-901-2345",
        "brand": "Apple",
        "model": "iPhone 16",
        "4G Data Used": "20GB",
        "5G Data Used": "15GB",
        "Minutes Used": "1200",
        "Messages Used": "400",
      },
      {
        "phoneNumber": "789-012-3456",
        "brand": "OnePlus",
        "model": "9 Pro",
        "4G Data Used": "10GB",
        "5G Data Used": "6GB",
        "Minutes Used": "750",
        "Messages Used": "200",
      },
    ],
    "job": "Construction Worker",
    "industry": "Workforce",
};

export const users = [JohnSmith, JaneDoe, BobBuilder];
