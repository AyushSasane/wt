package com.restaurant.service;

import com.restaurant.model.Customer;
import com.restaurant.model.Order;
import com.restaurant.model.OrderItem;
import com.restaurant.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order createOrder(Customer customer, List<OrderItem> items) {
        BigDecimal total = calculateTotal(items);
        Order order = new Order();
        order.setCustomer(customer);
        order.setTotalPrice(total);
        order.setStatus(OrderStatus.PENDING);
        return orderRepository.save(order);
    }

    private BigDecimal calculateTotal(List<OrderItem> items) {
        return items.stream().map(item -> item.getPrice().multiply(BigDecimal.valueOf(item.getQuantity())))
                    .reduce(BigDecimal.ZERO, BigDecimal::add);
    }
}
