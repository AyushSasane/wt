package com.vit.results.service;

import com.vit.results.entity.Result;
import com.vit.results.repository.ResultRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResultService {
    private final ResultRepository resultRepository;

    public ResultService(ResultRepository resultRepository) {
        this.resultRepository = resultRepository;
    }

    public List<Result> getResultsByStudentId(int studentId) {
        return resultRepository.findByStudentStudentId(studentId);
    }
}
