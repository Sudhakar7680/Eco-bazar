import React, { useState, useEffect } from 'react';
import './CartPage.css';
import star from '../assets/star.png';
import checkmarkImage from '../assets/checkmark.jpg';

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const [showBillingForm, setShowBillingForm] = useState(false); 
  
  const [billingInfo, setBillingInfo] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    streetAddress: '',
    country: '',
    state: '',
    zipCode: '',
    email: '',
    phone: '',
    notes: '',
    paymentMethod: 'Cash on Delivery',
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  // Load cart from localStorage
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(
      storedCart.map((product) => ({
        ...product,
        quantity: product.quantity || 1, // Initialize quantity if not already present
      }))
    );
  }, []);

  // Calculate the total price of the items in the cart
  const calculateTotal = () => {
    return cart
      .reduce((acc, product) => acc + parseFloat(product.price) * product.quantity, 0)
      .toFixed(2);
  };

  // Update quantity of a product
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Handle "Buy Now" action
  const handleBuyNow = () => {
    setShowBillingForm(true); 
  };

  // Handle billing form changes
  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const requiredFields = [
      'firstName',
      'lastName',
      'streetAddress',
      'country',
      'state',
      'zipCode',
      'email',
      'phone',
    ];
    const missingFields = requiredFields.filter(field => !billingInfo[field]);

    if (missingFields.length > 0) {
      alert(`Please fill in the following fields: ${missingFields.join(', ')}`);
    } else {
     
    setShowBillingForm(false);
    setShowSuccessPopup(true);
  }
}
const closeSuccessPopup = () => {
  setShowSuccessPopup(false);
};

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((product) => (
          <div key={product.id} className="cart-item">
            <img src={product.imageUrl} alt={product.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{product.name}</h4>
              <p>Price: ${product.price}</p>
              <div className="product-rating">
                {[...Array(5)].map((_, index) => (
                  <img key={index}src={star} alt="Star" className={`star ${index < Math.floor(product.rating) ? 'filled' : ''}`} />
                ))}
              </div>
              <div className="quantity-control">
                <label htmlFor={`quantity-${product.id}`}>Quantity: </label>
                <input type="number" id={`quantity-${product.id}`} min="1" value={product.quantity} onChange={(e) => updateQuantity(product.id, parseInt(e.target.value, 10))}/>
              </div>
              <button onClick={() => removeFromCart(product.id)} className="remove-from-cart"> Remove </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total Items: {cart.length}</h3>
        <h3>Total Amount: ${calculateTotal()}</h3>
        <button onClick={handleBuyNow} className="buy-now-button">  Buy Now </button>
      </div>

      {/* Billing Information Form */}
      {showBillingForm && (
        <div className="billing-form">
          <h2>Billing Information</h2>
          <form onSubmit={handlePlaceOrder}>
            <div className="form-row">
              <input type="text" name="firstName" placeholder="First name"value={billingInfo.firstName} onChange={handleBillingChange} />
              <input type="text"name="lastName" placeholder="Last name" value={billingInfo.lastName} onChange={handleBillingChange} />
              <input type="text"  name="companyName" placeholder="Company Name (optional)" value={billingInfo.companyName} onChange={handleBillingChange} />
            </div>
            <div className="form-row">
              <input type="text" name="streetAddress" placeholder="Street Address"value={billingInfo.streetAddress} onChange={handleBillingChange} />
            </div>
            <div className="form-row">
              <select name="country" value={billingInfo.country} onChange={handleBillingChange} >
                <option value="">Select Country/Region</option>
                <option value="USA">India</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                {/* Add more options as needed */}
              </select>
              <select name="state" value={billingInfo.state} onChange={handleBillingChange} >
                <option value="">Select State</option>
                <option value="TG">Telangana</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                {/* Add more options as needed */}
              </select>
              <input type="text" name="zipCode" placeholder="Zip Code" value={billingInfo.zipCode} onChange={handleBillingChange} />
            </div>
            <div className="form-row">
              <input type="email"name="email" placeholder="Email Address" value={billingInfo.email}onChange={handleBillingChange} />
              <input type="text" name="phone" placeholder="Phone Number" value={billingInfo.phone} onChange={handleBillingChange} />
            </div>
            <div className="form-row">
              <textarea name="notes" placeholder="Order Notes (Optional)" value={billingInfo.notes} onChange={handleBillingChange}></textarea>
            </div>
            <h3>Payment Method</h3>
            <div className="form-row">
              <label>
                <input type="radio"name="paymentMethod" value="Cash on Delivery" checked={billingInfo.paymentMethod === 'Cash on Delivery'}onChange={handleBillingChange}/>
                Cash on Delivery
              </label>
              <label>
                <input type="radio" name="paymentMethod" value="Paypal" checked={billingInfo.paymentMethod === 'Paypal'} onChange={handleBillingChange} />
                Paypal
              </label>
              <label>
                <input type="radio" name="paymentMethod" value="Amazon Pay" checked={billingInfo.paymentMethod === 'Amazon Pay'} onChange={handleBillingChange} />
                Amazon Pay
              </label>
            </div>
            <button type="submit" className="place-order-button">Place Order</button>
          </form>
        </div>
      )}

{showSuccessPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <img src={checkmarkImage} alt="Success" className="checkmark-image" />
            <h2>Order Placed Successful!</h2>
            <p>Thank you for your order, {billingInfo.firstName} {billingInfo.lastName}!</p>
            <p>
              Your items will be shipped to:
              <br />
              {billingInfo.streetAddress}, {billingInfo.state}, {billingInfo.country}
            </p>
            <p><strong>Total Amount:</strong> ${calculateTotal()}</p>
            <button onClick={closeSuccessPopup} className="close-popup-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
