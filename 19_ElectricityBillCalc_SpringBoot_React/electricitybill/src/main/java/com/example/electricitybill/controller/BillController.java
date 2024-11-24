package com.example.electricitybill.controller; 
 
import com.example.electricitybill.model.ElectricityBill; 
import com.example.electricitybill.service.BillCalculatorService; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.*; 
 
@RestController 
@RequestMapping("/api/bill") 
@CrossOrigin(origins = "http://localhost:3000") 
public class BillController { 
 
    @Autowired 
    private BillCalculatorService billCalculatorService; 
 
    @PostMapping("/calculate") 
    public ElectricityBill calculateBill(@RequestBody ElectricityBill bill) { 
        double totalBill = 
billCalculatorService.calculateElectricityBill(bill.getUnits()); 
        bill.setTotalBill(totalBill); 
        return bill; 
    } 
} 