package com.vit.vit_results.controller;

import com.vit.vit_results.model.StudentResult;
import com.vit.vit_results.service.StudentResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/results")
public class StudentResultController {
    @Autowired
    private StudentResultService service;

    @GetMapping
    public List<StudentResult> getAllResults() {
        return service.getAllResults();
    }

    @GetMapping("/{id}")
    public StudentResult getResultById(@PathVariable Long id) {
        return service.getResultById(id);
    }
}
