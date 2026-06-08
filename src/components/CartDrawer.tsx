"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";

export const CartDrawer = () => {
  const { isCartOpen, toggleCart, items, updateQuantity, subtotal, removeFromCart } = useCart();

  return (
    <>
      {/* Backdrop */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity"
          onClick={toggleCart}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[var(--color-brand-cream-bg)] z-[101] shadow-2xl transform transition-transform duration-500 ease-in-out flex flex-col ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-brand-gold-soft)]/30 bg-[var(--color-brand-cream-card)]">
          <h2 className="font-serif text-2xl font-bold flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-[var(--color-brand-gold-royal)]" />
            Your Order
          </h2>
          <button 
            onClick={toggleCart}
            className="p-2 rounded-full hover:bg-[var(--color-brand-maroon-royal)]/10 text-[var(--color-brand-maroon-royal)] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
              <ShoppingBag className="w-16 h-16 text-[var(--color-brand-maroon-royal)]" />
              <p className="text-lg font-medium">Your cart is empty.</p>
              <p className="text-sm">Add some royal flavours to start your order.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 premium-card shadow-sm hover:shadow-md">
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-[var(--color-brand-maroon-deep)] leading-tight">{item.name}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-[var(--color-brand-gold-royal)] font-bold mb-3">
                    ₹{item.price}
                  </div>
                  
                  {/* Quantity Selector */}
                  <div className="flex items-center gap-4 bg-[var(--color-brand-cream-bg)] w-fit rounded-lg border border-[var(--color-brand-gold-soft)]/50 p-1">
                    <button 
                      className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[var(--color-brand-maroon-royal)]/10 text-[var(--color-brand-maroon-royal)] transition-colors"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold w-4 text-center">{item.quantity}</span>
                    <button 
                      className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-[var(--color-brand-maroon-royal)]/10 text-[var(--color-brand-maroon-royal)] transition-colors"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[var(--color-brand-gold-soft)]/30 bg-[var(--color-brand-cream-card)]">
            <div className="flex justify-between items-center mb-6">
              <span className="font-serif text-xl">Subtotal</span>
              <span className="font-bold text-2xl text-[var(--color-brand-maroon-royal)]">₹{subtotal}</span>
            </div>
            <button className="w-full btn-primary py-4 text-lg">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};
