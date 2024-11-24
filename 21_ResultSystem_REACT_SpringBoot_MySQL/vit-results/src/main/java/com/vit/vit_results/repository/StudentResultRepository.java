package com.vit.vit_results.repository;



import com.vit.vit_results.model.StudentResult;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentResultRepository extends JpaRepository<StudentResult, Long> {
}
