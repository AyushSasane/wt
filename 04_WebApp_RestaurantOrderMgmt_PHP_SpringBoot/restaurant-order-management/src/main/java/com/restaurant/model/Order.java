package com.restaurant.model;

import javax.persistence.*;
import java.math.BigDecimal;
import java.sql.Timestamp;

@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    private BigDecimal totalPrice;
    private Timestamp orderDate;

    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    // Getters and Setters
}
