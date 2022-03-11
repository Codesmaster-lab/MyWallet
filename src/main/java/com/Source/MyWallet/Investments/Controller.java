package com.Source.MyWallet.Investments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:3000/")
@RequestMapping("/api")
public class Controller {

    private final Service FundService;

    @Autowired
    public Controller(Service fundservice)
    {
        this.FundService=fundservice;
    }

    @GetMapping("/getfunds")
    public List<Fund> gets()
    {
        return FundService.getFunds();
    }

    @GetMapping("/getfundbyid/{ids}")
    public Fund getfundbyid(@PathVariable int ids)
    {
        //System.out.println(FundService.getfundbyid(ids));
       return FundService.getfundbyid(ids);
    }

    @GetMapping("/gettotalinp")
    public String gettotalinp(){return FundService.gettotaloftotal_inp();}

    @GetMapping("/gettotalsavings1")
    public String gettotalsavings1(){return FundService.gettotalofsavings1();}

    @GetMapping("/gettotalsavings2")
    public String gettotalsavings2(){return FundService.gettotalofsavings2();}

    @PostMapping("/postfunds")
    public List<Fund> puts(@RequestBody List<Fund> FD)
    {
        return FundService.saveFunds(FD);
    }

    @DeleteMapping("/deletefunds/{id}")
    public String remove(@PathVariable int id)
    {
        FundService.deleteFund(id);
        return "Succesfully removed "+ id ;
    }
   @PutMapping("/updatefund")
    public Fund update(@RequestBody Fund fund)
   {
       return  FundService.updateFund(fund);
   }
}
