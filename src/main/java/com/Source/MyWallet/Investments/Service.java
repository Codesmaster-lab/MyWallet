package com.Source.MyWallet.Investments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Service {

    @Autowired
    public final Repository repository;
     public  Service(Repository Repo){
         this.repository=Repo;
     }

     //to get all funds from database
    public List<Fund> getFunds()
    {
        return repository.findAll() ;
    }

    //to put a fund into database
    public List<Fund> saveFunds(List<Fund> funds)
    {
        return repository.saveAll(funds);
    }

    //to delete a fund from database
    public void deleteFund (int id)
    {
         repository.deleteById(id);
    }

    //to update a fund in database
    public Fund updateFund (Fund updatedfund){
         Fund fund = repository.findById(updatedfund.getId()).orElse(null);
         fund.setName(updatedfund.getName());
         fund.setDoe(updatedfund.getDoe());
         fund.setTotal_inp(updatedfund.getTotal_inp());
         fund.setSavings1(updatedfund.getSavings1());
         fund.setSavings2(updatedfund.getSavings2());
         return repository.save(fund);
    }

}
