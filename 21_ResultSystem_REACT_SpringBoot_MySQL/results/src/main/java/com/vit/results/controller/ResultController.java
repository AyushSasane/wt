package com.vit.results.controller;

import com.vit.results.entity.Result;
import com.vit.results.service.ResultService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/results")
@CrossOrigin(origins = "*") // Allow React to access the backend
public class ResultController {
    private final ResultService resultService;

    public ResultController(ResultService resultService) {
        this.resultService = resultService;
    }

    @GetMapping("/student/{studentId}")
    public List<Result> getResultsForStudent(@PathVariable int studentId) {
        return resultService.getResultsByStudentId(studentId);
    }
}
