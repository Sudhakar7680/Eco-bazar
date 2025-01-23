import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import greenapple from '../assets/green-apple.png';
import chanisecabbage from '../assets/chanise-cabbage.png';
import greenlettuce from '../assets/green-lettuce.png';
import greenchili from '../assets/green-chili.png';
import corn from '../assets/corn.png';
import chilli from '../assets/chilli.png';
import potato from '../assets/potato.png';
import brinjal from '../assets/brinjal.png';
import orange from '../assets/orange.png';
import cauliflower from '../assets/cauliflower.png';
import star from '../assets/star.png';
import tomatos from '../assets/tomatos.png';
import mango from '../assets/mango.png';
import redchilli from '../assets/redchilli.png';
import ladyfinger from '../assets/ladyfinger.png';
import greencucumber from '../assets/greencucumber.png';
import Whole_Chicken from '../assets/Whole_Chicken.jpg';
import raw_chicken from '../assets/raw_chicken.jpg';
import Beef_Meat from '../assets/Beef_Meat.png';
import chicken_drumsticks from '../assets/chicken_drumsticks.png';
import Fish from '../assets/Fish.jpg';
import meat from '../assets/meat.png';
import ShoreFreshFish from '../assets/ShoreFreshFish.png';
import TilapiaFilletsFish from '../assets/TilapiaFilletsFish.png';
import checkmark from '../assets/checkmark.jpg';
import './ProductDetails.css';

const productData = {
  1: {
    name: 'Green Apple',
    description: 'Fresh green apple full of nutrients.',
    imageUrl: greenapple,
    price: '10.99',
    rating: 4.5,
    healthBenefits: [
      'Rich in dietary fiber, aids digestion.',
      'Contains antioxidants to boost immunity.',
      'Supports heart health and weight loss.',
    ],
  },
  2: {
    name: 'Chanise Cabbage',
    description: 'Crisp and fresh Chanise Cabbage.',
    imageUrl: chanisecabbage,
    price: '13.99',
    rating: 4.2,
    healthBenefits: [
      'Low in calories, high in vitamins C and K.',
      'Promotes healthy digestion.',
      'Boosts immunity with its antioxidant properties.',
    ],
  },
  3: {
    name: 'Green Lettuce',
    description: 'Freshly picked green lettuce.',
    imageUrl: greenlettuce,
    price: '14.99',
    rating: 4.7,
    healthBenefits: [
      'Excellent source of vitamin A and potassium.',
      'Keeps you hydrated with its high water content.',
      'Supports bone health and reduces inflammation.',
    ],
  },
  4: {
    name: 'Green Capsicum',
    description: 'Fresh and crunchy green capsicum, great for salads.',
    imageUrl: greenchili,
    price: '12.0',
    rating: 4.5,
    healthBenefits: [
      'Rich in vitamins A and C, supports immune function.',
      'Contains antioxidants that help reduce inflammation.',
      'Low in calories, great for weight management.',
    ],
  },
  5: {
    name: 'Corn',
    description: 'Sweet and crunchy corn.',
    imageUrl: corn,
    price: '20.0',
    rating: 4.6,
    healthBenefits: [
      'Good source of fiber, improves digestion.',
      'Rich in B vitamins and essential minerals.',
      'Supports eye health due to lutein and zeaxanthin.',
    ],
  },
  6: {
    name: ' Chili',
    description: 'Spicy and fresh green chili.',
    imageUrl: chilli,
    price: '20.0',
    rating: 4.1,
    healthBenefits: [
      'Boosts metabolism and burns calories.',
      'Rich in vitamin C, strengthens immunity.',
      'May improve skin health and reduce inflammation.',
    ],
  },
  7: {
    name: 'Potato',
    description: 'Freshly harvested potatoes, perfect for cooking.',
    imageUrl: potato,
    price: '25.99',
    rating: 4.3,
    healthBenefits: [
      'High in potassium and fiber.',
      'Good source of vitamins B6 and C.',
      'Provides long-lasting energy.',
    ],
  },
  8: {
    name: 'Orange',
    description: 'Juicy and sweet oranges, high in vitamin C.',
    imageUrl: orange,
    price: '9.99',
    rating: 4.8,
    healthBenefits: [
      'High in vitamin C, boosts immunity.',
      'Contains flavonoids, supports heart health.',
      'Good for skin health and hydration.',
    ],
  },
  9: {
    name: 'Brinjal',
    description: 'Fresh and tender brinjal, perfect for grilling.',
    imageUrl: brinjal,
    price: '15.0',
    rating: 4.4,
    healthBenefits: [
      'Rich in fiber, aids in digestion.',
      'Contains antioxidants, supports heart health.',
      'Low in calories, perfect for weight loss.',
    ],
  },
  10: {
    name: 'Cauliflower',
    description: 'Fresh and nutritious cauliflower.',
    imageUrl: cauliflower,
    price: '24.99',
    rating: 4.2,
    healthBenefits: [
      'Rich in fiber and vitamins C and K.',
      'Supports healthy digestion.',
      'Contains antioxidants that help reduce inflammation.',
    ],
  },
  11: {
    name: 'Red Chili',
    description: 'Spicy and hot red chili, perfect for adding heat to dishes.',
    imageUrl: redchilli,
    price: '18.0',
    rating: 4.2,
    healthBenefits: [
      'Boosts metabolism and burns calories.',
      'Rich in capsaicin, helps reduce pain and inflammation.',
      'Contains vitamins A and C for immune support.',
    ],
  },
  12: {
    name: 'Tomato',
    description: 'Juicy and ripe tomatoes, great for salads and cooking.',
    imageUrl: tomatos,
    price: '25.0',
    rating: 4.2,
    healthBenefits: [
      'High in lycopene, supports heart health.',
      'Rich in vitamins C and K, promotes skin health.',
      'Contains antioxidants that reduce inflammation.',
    ],
  },
  13: {
    name: 'Fresh Mango',
    description: 'Sweet and juicy mango, perfect for a tropical treat.',
    imageUrl: mango,
    price: '7.0',
    rating: 4.2,
    healthBenefits: [
      'High in vitamin C and A, boosts immunity.',
      'Rich in dietary fiber, supports digestion.',
      'Contains antioxidants that promote skin health.',
    ],
  },
  14: {
    name: 'Lady Finger',
    description: 'Fresh and tender lady finger, great for cooking.',
    imageUrl: ladyfinger,
    price: '16.99',
    rating: 4.2,
    healthBenefits: [
      'Rich in fiber, aids in digestion.',
      'Contains vitamins A and C for immune support.',
      'Low in calories, good for weight management.',
    ],
  },
  15: {
    name: 'Green Cucumber',
    description: 'Cool and refreshing green cucumber, perfect for salads.',
    imageUrl: greencucumber,
    price: '18.0',
    rating: 4.2,
    healthBenefits: [
      'High in water content, keeps you hydrated.',
      'Rich in antioxidants, supports healthy skin.',
      'Low in calories, aids in weight loss.',
    ],
  },
  16: {
    name: 'Whole Chicken',
    description: 'Fresh whole chicken, perfect for roasting or grilling.',
    imageUrl: Whole_Chicken,
    price: '199.99',
    rating: 4.2,
    healthBenefits: [
      'Good source of high-quality protein.',
      'Contains essential vitamins like B6 and B12.',
      'Supports muscle growth and maintenance.',
    ],
  },
  17: {
    name: 'Raw Chicken',
    description: 'Fresh and raw chicken, ideal for various recipes.',
    imageUrl: raw_chicken,
    price: '150.99',
    rating: 4.2,
    healthBenefits: [
      'Rich in lean protein, supports muscle health.',
      'Contains important nutrients like phosphorus and selenium.',
      'Boosts metabolism and energy production.',
    ],
  },
  18: {
    name: 'Beef Meat',
    description: 'Fresh and tender beef meat, perfect for grilling or cooking.',
    imageUrl: Beef_Meat,
    price: '500.99',
    rating: 4.2,
    healthBenefits: [
      'High in iron and protein, supports red blood cells.',
      'Rich in vitamins B12 and zinc, boosts immune system.',
      'Provides essential amino acids for muscle growth.',
    ],
  },
  19: {
    name: 'Chicken Drumsticks',
    description: 'Juicy and tender chicken drumsticks, great for BBQ.',
    imageUrl: chicken_drumsticks,
    price: '300.99',
    rating: 4.2,
    healthBenefits: [
      'Good source of protein, supports muscle health.',
      'Rich in niacin, supports energy production.',
      'Contains minerals like phosphorus for bone health.',
    ],
  },
  20: {
    name: 'Fish',
    description: 'Fresh fish, great for healthy meals.',
    imageUrl: Fish,
    price: '129.99',
    rating: 4.2,
    healthBenefits: [
      'Rich in omega-3 fatty acids, supports heart health.',
      'Good source of protein, promotes muscle growth.',
      'Contains vitamin D, supports bone health.',
    ],
  },
  21: {
    name: 'Meat',
    description: 'Fresh and high-quality meat, perfect for various dishes.',
    imageUrl: meat,
    price: '550.99',
    rating: 4.2,
    healthBenefits: [
      'High in protein, supports muscle development.',
      'Contains iron, boosts red blood cell production.',
      'Provides essential amino acids for overall health.',
    ],
  },
  22: {
    name: 'Shore Fish',
    description: 'Fresh shore fish, ideal for seafood lovers.',
    imageUrl: ShoreFreshFish,
    price: '259.99',
    rating: 4.2,
    healthBenefits: [
      'Rich in lean protein, supports muscle health.',
      'Contains omega-3 fatty acids, good for heart health.',
      'High in selenium, supports thyroid function.',
    ],
  },
  23: {
    name: 'Tilapia Fish',
    description: 'Fresh and tasty Tilapia fish fillets.',
    imageUrl: TilapiaFilletsFish,
    price: '299.99',
    rating: 4.2,
    healthBenefits: [
      'High in protein, supports weight management.',
      'Rich in omega-3 fatty acids, promotes heart health.',
      'Contains B vitamins, boosts energy levels.',
    ],
  },
};


const ProductDetails = ({ onCartUpdate}) => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const product = productData[id];

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showBilling, setShowBilling] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    address: '',
    country: '',
    state: '',
    zipCode: '',
    phone: '',
    email: '',
    paymentMethod: '',
    quantity: 1,
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    onCartUpdate(cart.length);  
  }, [cart, onCartUpdate]);

  const addToCart = () => {
    if (!cart.some((item) => item.id === id)) {
      const updatedCart = [...cart, { id, ...product }];
      setCart(updatedCart);
      alert(`${product.name} has been added to your cart!`);
    }
  };
  const removeFromCart = () => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    alert(`${product.name} has been added to your cart!`);
  };
  const isInCart = cart.some((item) => item.id === id);
  const handleBuyNow = () => {
    setShowBilling(true);
  };
  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBillingSubmit = (e) => {
    e.preventDefault();
    setShowBilling(false); 
    setShowOrderConfirmation(true);
  };

  const handleCloseModal = () => {
    setShowBilling(false); 
  };
  const handleCloseOrderConfirmation = () => {
    setShowOrderConfirmation(false);
    navigate('/'); // Redirect to home or a desired page
  };
  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    if (quantity >= 1) {
      setBillingInfo((prev) => ({
        ...prev,
        quantity,
      }));
    }
  };

  const totalPrice = (product.price * billingInfo.quantity).toFixed(2); 
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found!</h2>
        <button onClick={() => navigate('/')}>Back to Homepage</button>
      </div>
    );
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} className="details-image" />
      <p className="description">{product.description}</p>
      <p className="price"> Price: <strong>${product.price}</strong></p>
      <div className="product-rating">
      {[...Array(5)].map((_, index) => (
          <img key={index} src={star} alt="Star" className={`star ${index < Math.floor(product.rating) ? 'filled' : ''}`}/>
        ))}
      </div>
      <div className="health-benefits">
        <h2>Health Benefits:</h2>
        <ul>
          {product.healthBenefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      {isInCart ? (
        <button className="remove-button" onClick={removeFromCart}> Remove from Cart</button>
      ) : (
        <button className="add-button" onClick={addToCart}> Add to Cart</button>
      )}

      {/* Shop Now Button */}
      <button className="shop-button" onClick={() => navigate('/shop')}> Shop Now</button>
      <button onClick={handleBuyNow} className="buy-now">Buy Now</button>
      <button className="back-button" onClick={() => navigate(-1)}>Go Back</button>
       {/* Billing Information Modal */}
       {showBilling && (
        <div className="billing-modal">
          <div className="billing-modal-content">
            <span className="close-modal" onClick={handleCloseModal}> &times;</span>
            <h2>Billing Information</h2>
            <img src={product.imageUrl} alt={product.name} className="billing-image" />
            <p><strong>Product:</strong> {product.name}</p>
            <p><strong>Price:</strong> ${totalPrice}</p>
            <form onSubmit={handleBillingSubmit}>
              <div>
                <label>Name:</label>
                <input type="text"name="name" value={billingInfo.name} onChange={handleBillingChange} required />
              </div>
              <div>
                <label>Address:</label>
                <input type="text" name="address"value={billingInfo.address} onChange={handleBillingChange} required />
              </div>
              <div>
              <select name="country" value={billingInfo.country} onChange={handleBillingChange} >
                <option value="">Select Country/Region</option>
                <option value="USA">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                
              </select>
              </div>
              <div>
              <select name="state" value={billingInfo.state} onChange={handleBillingChange}>
                <option value="">Select State</option>
                <option value="TG">Telangana</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
               
              </select>
              </div>
              <div>
                <label>Zip Code:</label>
                <input type="text" name="zipCode" value={billingInfo.zipCode} onChange={handleBillingChange} required />
              </div>
              <div>
                <label>Phone Number:</label>
                <input type="text" name="phone"value={billingInfo.phone} onChange={handleBillingChange} required />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" name="email" value={billingInfo.email} onChange={handleBillingChange} required />
              </div>
              <h5>Payment Method</h5>
            <div className="form-row">
              <label>
                <input type="radio" name="paymentMethod" value="Cash on Delivery" checked={billingInfo.paymentMethod === 'Cash on Delivery'} onChange={handleBillingChange} />
                Cash on Delivery
              </label>
              <label>
                <input type="radio" name="paymentMethod" value="Paypal" checked={billingInfo.paymentMethod === 'Paypal'} onChange={handleBillingChange} />
                Paypal
              </label>
              <label>
                <input type="radio" name="paymentMethod"value="Amazon Pay"checked={billingInfo.paymentMethod === 'Amazon Pay'} onChange={handleBillingChange}/>
                Amazon Pay
              </label>
            </div>
              <div>
                <label>Quantity:</label>
                <input type="number" name="quantity" value={billingInfo.quantity} onChange={handleQuantityChange} min="1" required />
              </div>
              <button type="submit" className="place-order-button">Place Order</button>
            </form>
          </div>
        </div>
      )}
           {showOrderConfirmation && (
        <div className="order-confirmation-popup">
          <div className="order-confirmation-content">
            <img src={checkmark} alt="Success" className="checkmark-icon" />
            <h2>Order Placed Successfully!</h2>
            <p>
              Thank you for your order, <strong>{billingInfo.name}</strong>!
            </p>
            <p>
              Your items will be shipped to: <br />
              <strong>{billingInfo.address}</strong>
            </p>
            <p>Total Price: ${totalPrice}</p>
            <button className="close-confirmation-button" onClick={handleCloseOrderConfirmation}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
