import java.io.*;
import java.util.*;
import java.lang.*;
public class Main{
    static int amt,total=0;
    static int notes[] ={2000, 500, 200, 100};
    static int number[]=new int[4];
    static void Denomination(int amt){
        int t = amt;
        for (int i = 0; i < notes.length; i++){
            int c = t / notes[i];
            if (c != 0&&number[i]!=0&&t!=0)
                {   if(t<100){System.exit(0);}
                    if(number[i]<c&&number[i]!=0&&t!=0)
                    {  if((i<notes.length-1)&&(number[i]<5)&&(number[i]<number[i+1])&&((notes[i+1]*number[i+1])>(notes[i]*number[i]))){//implements for lesser no.of notes
                            continue;}                            
                        System.out.println("number of "+notes[i] + " notes we get =" + number[i]);
                        t=(t-(number[i]*notes[i]));
                        number[i]=0;
                        if(t!=0){
                            Denomination(t);System.exit(0);}
                    }
                    else
                    {   
                        if(i<notes.length-1&&(number[i]<number[i+1])&&((notes[i+1]*number[i+1])>(notes[i]*number[i]))){//implementation for lesser no. of notes
                            continue;}
                        System.out.println("number of "+notes[i] + " notes we get =" + c);
                        number[i]=number[i]-c;
                         t = t % notes[i];
                         
                    }
                   
                }
        }
            
    }
    static void Display(){
        for(int i=0;i<notes.length;i++){
            System.out.println(notes[i]+" notes left:"+number[i]);
        }
    }
    public static void main(String arg[]){
        Scanner in= new Scanner(System.in);
        for(int j=0;j<notes.length;j++){
            System.out.println("enter number of"+notes[j]+"notes:");
            number[j]=in.nextInt();
        }
        System.out.print("Enter the amount: ");
        amt = in.nextInt();
        for(int i=0;i<notes.length;i++){
            total=total+(notes[i]*number[i]);
        }
        if (amt > total) {
            System.out.println("ATM Cash Exceeded");
            return;
        }
        Denomination(amt);
        System.out.println("----Cash Left------");
        Display();
    }
}