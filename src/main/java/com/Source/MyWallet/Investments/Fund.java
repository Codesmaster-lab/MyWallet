package com.Source.MyWallet.Investments;

import lombok.Data;
import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "FundTable")
public class Fund {
    @Id
    @GeneratedValue
    private int Id;
    String Name;
    private double TotalInp;
    private double Savings1;
    private double Savings2;
    LocalDate doe;

}
