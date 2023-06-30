import java.io.*;
import java.util.*;
import java.lang.*;
public class recursion {
    static int amt,total=0,c,n=0;
    static int notes[] ={2000, 500, 200, 100};
    static int number[]=new int[4];
    public static void check(){
        for(int i=n;i<4;i++){
            total=total+notes[i]*number[n];
        }
        if((c==number[n])){
            if((total>((c/2)*notes[n])&&(number[n+1]>5))){
            System.out.println("number of"+notes[n]+"we get="+(c/2));
            number[n]=number[n]-(c/2);
            amt = amt - (notes[n]*(c/2));}
            else{
                System.out.println("number of "+notes[n]+"we get ="+c);
                number[n]=number[n]-c;
                amt=amt-(notes[n]*c);
            }
            denomination(amt, n+1);
        }
    }
    public static void display(){
        for(int k=0;k<notes.length;k++){
            System.out.println(notes[k]+" notes left = "+number[k]);
        }
    }
    public static void denomination(int amt, int n){
        int t = amt;
        if((amt>=2000)&&(n==0)){
            c = t / 2000;
            if(c==number[0]){check();}
            if ((c != 0)&&(c<number[0])){
                if((n<4)&&(number[n]<5)&&((notes[n+1]*number[n+1])>=(notes[n]*number[n]))){//implements for lesser no.of notes
                    System.out.println("number of 2000 notes we get ="+2);
                    number[n]=number[n]-2;
                    amt=amt-4000;
                    denomination(amt,1);}
            System.out.println("number of "+2000+ " notes we get =" + c);
            number[n]=number[n]-c;  
            t=t%2000; n=1;   
                       
            }
            else if((number[0]!=0)&&(c>number[0])){
                if((n<4)&&(number[n]<5)&&((notes[n+1]*number[n+1])>=(notes[n]*number[n]))){//implements for lesser no.of notes
                    System.out.println("number of 2000 notes we get ="+2);
                    number[n]=number[n]-2;
                    amt=amt-4000;
                    denomination(amt,1);}
                System.out.println("number of "+2000+" notes we get = "+number[n]);
                amt=amt-(2000*number[n]);
                number[n]=0;
                denomination(amt,1);}
            
            amt=t;
            denomination(t,1);
        }
        else if((amt>=500)&&(n==1)){
            c=t/500;
            if(c==number[0]){check();}
            if ((c != 0)&&(c<=number[n])){
               if((n<notes.length-1)&&(number[n]<5)&&(number[n]<number[n+1])&&((notes[n+1]*number[n+1])>=(notes[n]*number[n]))){//implements for lesser no.of notes
                    System.out.println("number of 500 notes we get ="+2);
                    number[n]=number[n]-2;
                    amt=amt-1000;
                    denomination(amt,2);
                }
                System.out.println("number of "+500+ " notes we get =" + c);
                number[n]=number[n]-c; 
                t=t%500; n=2;   
                //denomination(t,n);           
            }
            else if((number[1]!=0)&&(c>number[n])){
                if((n<notes.length-1)&&(number[n]<5)&&(number[n]<number[n+1])&&((notes[n+1]*number[n+1])>=(notes[n]*number[n]))){//implements for lesser no.of notes
                    System.out.println("number of 500 notes we get ="+2);
                    number[n]=number[n]-2;
                    amt=amt-1000;
                    denomination(amt,2);}
                System.out.println("number of "+500+" notes we get = "+number[n]);
                amt=amt-(500*number[n]);
                number[n]=0;
                denomination(amt,2);}
            
            amt=t;
            denomination(amt,2);
        }
        else if((amt>=200)&&(n==2)){
            c=t/200;
           
            if ((c != 0)&&(c<=number[n])){
                if((n<notes.length-1)&&(number[n]<5)&&(number[n]<number[n+1])&&((notes[n+1]*number[n+1])>=(notes[n]*number[n]))){//implements for lesser no.of notes
                    System.out.println("number of 200 notes we get ="+2);
                    number[n]=number[n]-2;
                    amt=amt-400;
                    denomination(amt,3);}
                System.out.println("number of "+200+ " notes we get =" + c);
                number[n]=number[n]-c;
                t=t%200;n=3; 
                //denomination(t,n);     
            }
            else if((c>number[n])&&(n==2)&&(number[2]!=0)){
                if((n<notes.length-1)&&(number[n]<5)&&(number[n]<number[n+1])&&((notes[n+1]*number[n+1])>=(notes[n]*number[n]))){//implements for lesser no.of notes
                    System.out.println("number of 200 notes we get ="+2);
                    number[n]=number[n]-2;
                    amt=amt-400;
                    denomination(amt,3);}
                System.out.println("number of "+200+" notes we get = "+number[n]);
                amt=amt-(200*number[n]);
                number[n]=0;
                denomination(amt,3);}
            
            amt=t;
            denomination(amt,3);
        }
        else if((amt>=100)&&(n==3)){
            c=t/100;
            if ((c != 0)&&(c<=number[n])){
                System.out.println("number of "+100+ " notes we get =" + c); 
                number[n]=number[n]-c;
                t=t%100; 
               // denomination(t,n);               
            }
            else if((c>number[n])&&(number[0]!=0)){
                System.out.println("number of "+100+" notes we get = "+number[n]);
                amt=amt-(100*number[n]);
                number[n]=0;
            }
            else{System.exit(0);}
            
            amt=t;
            denomination(amt,0);
        }
        else{
            System.out.println("------cash left-------");
            display();
            System.exit(0);
        }
        
    }
    public static void main(String arg[]){
        Scanner in= new Scanner(System.in);
        for(int i=0;i<notes.length;i++){
            System.out.println("Enter number of "+notes[i]+"notes:");
            number[i]=in.nextInt();
        }
        System.out.print("Enter the amount: ");
        amt = in.nextInt();
        if(amt>=2000){n=0;}
        else if(amt>=500){n=1;}
        else if(amt>=200){n=2;}
        else{n=3;}
        for(int i=0;i<notes.length;i++){
            total=total+(notes[i]*number[i]);
        }
        if (amt > total) {
            System.out.println("ATM Cash Exceeded");
            return;
        }
        System.out.print("[");
        for(int i=0;i<notes.length;i++){
            System.out.print(number[i]+" ");
        }
        System.out.print("]"+"\n");
        denomination(amt,n);
        
    }
}
