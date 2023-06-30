import java.util.*;
public class Main{
    public static void duplicate(int arr[],int n){
        List aList = new ArrayList();
        for(int i=0;i<n;i++){
                if(aList.contains(arr[i])==false){
                    aList.add(arr[i]);
                }
        }
        System.out.println(aList);
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the size of the array:");
        int n = sc.nextInt();
        int[] arr=new int[n];
        System.out.println("enter the elements of array:");
        for(int i=0;i<n;i++){
            arr[i]=sc.nextInt();
        }
        duplicate(arr,n);
    }
}