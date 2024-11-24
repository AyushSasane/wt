package com.vit.vit_results.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class StudentResult {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long studentId;
    private String studentName;
    private int subject1Mse;
    private int subject1Ese;
    private int subject2Mse;
    private int subject2Ese;
    private int subject3Mse;
    private int subject3Ese;
    private int subject4Mse;
    private int subject4Ese;
}
