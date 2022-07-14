package com.chov.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chov.dsmeta.entities.Sale;
import com.chov.dsmeta.repositories.SalesRepository;

@Service
public class SalesService {
	
	@Autowired
	private SalesRepository repository;
	
	public List<Sale> findSales(){
		return repository.findAll();
	}
}
