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

}
