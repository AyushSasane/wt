package com.vit.results.repository;

import com.vit.results.entity.Result;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResultRepository extends JpaRepository<Result, Integer> {
    List<Result> findByStudentStudentId(int studentId);
}
