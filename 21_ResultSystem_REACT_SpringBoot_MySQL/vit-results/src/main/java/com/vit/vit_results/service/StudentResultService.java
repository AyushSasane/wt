package com.vit.vit_results.service;

import com.vit.vit_results.model.StudentResult;
import com.vit.vit_results.repository.StudentResultRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentResultService {
    @Autowired
    private StudentResultRepository repository;

    public List<StudentResult> getAllResults() {
        return repository.findAll();
    }

    public StudentResult getResultById(Long id) {
        return repository.findById(id).orElse(null);
    }
}
