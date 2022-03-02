package com.Source.MyWallet.Investments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.math.RoundingMode;
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

    //to get sum of all total_inp from database
    public String gettotaloftotal_inp(){
                 List<Fund> FUND_SET=repository.findAll();
                 double totalinputsum=0.0;
                 for (Fund fund: FUND_SET)
                 {
                     totalinputsum+=fund.getTotal_inp();
                 }
        totalinputsum= BigDecimal.valueOf(totalinputsum).setScale(2, RoundingMode.FLOOR).doubleValue();

         String str=totalinputsum+"";
        return str;
    }
    //to get sum of all savings1 from database
    public String gettotalofsavings1(){
        List<Fund> FUND_SET=repository.findAll();
        double savings1=0.0;
        for (Fund fund: FUND_SET)
        {
            savings1+=fund.getSavings1();
        }
        savings1= BigDecimal.valueOf(savings1).setScale(2, RoundingMode.FLOOR).doubleValue();

        String str=savings1+"";
        return str;
    }
    //to get sum of all savings1 from database
    public String gettotalofsavings2(){
        List<Fund> FUND_SET=repository.findAll();
        double savings2=0.0;
        for (Fund fund: FUND_SET)
        {
            savings2+=fund.getSavings2();
        }
        savings2= BigDecimal.valueOf(savings2).setScale(2, RoundingMode.FLOOR).doubleValue();
        String str=savings2+"";
        return str;
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
    public Fund updateFund (Fund updatedfund)
    {
         Fund fund = repository.findById(updatedfund.getId()).orElse(null);
         fund.setName(updatedfund.getName());
         fund.setDoe(updatedfund.getDoe());
         fund.setTotal_inp(updatedfund.getTotal_inp());
         fund.setSavings1(updatedfund.getSavings1());
         fund.setSavings2(updatedfund.getSavings2());
         return repository.save(fund);
    }

}
