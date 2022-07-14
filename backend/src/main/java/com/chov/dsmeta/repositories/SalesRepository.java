package com.chov.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.chov.dsmeta.entities.Sale;

public interface SalesRepository extends JpaRepository<Sale, Long> {

}
