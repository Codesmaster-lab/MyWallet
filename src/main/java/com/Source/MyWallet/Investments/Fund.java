package com.Source.MyWallet.Investments;

import lombok.Data;
import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "FDTABLE")
public class Fund {
    @Id
    @SequenceGenerator(name="seq", initialValue=10000)
    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator="seq")
    private int Id;
    private String name;
    private double total_inp;
    private double savings1;
    private double savings2;
    private LocalDate doe;


}
