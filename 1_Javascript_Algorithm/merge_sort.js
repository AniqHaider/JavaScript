const test_values = [29, 100, 1, 2, 57, 28, 88, 3, 50, 67, 37, 1, 32, 20];

function merge_sort(values) {
  if (values.length <= 1) {
    return values;
  }

  const middle_index = Math.floor(values.length / 2);

  const left_values = merge_sort(values.slice(0,middle_index));
  const right_values = merge_sort(values.slice(middle_index));

  let sorted_values = [];

  let left_index = 0;

  let right_index = 0;

  while (left_index < left_values.length && right_index < right_values.length) {
    if (left_values[left_index] < right_values[right_index]) {
      sorted_values.push(left_values[left_index]);
      left_index += 1;

    } else {
      sorted_values.push(right_values[right_index]);
      right_index += 1;
    }
  }

  sorted_values = sorted_values.concat(left_values.slice(left_index));
  sorted_values = sorted_values.concat(right_values.slice(right_index));
  return sorted_values;
}

const sorted = merge_sort(test_values);
console.log(sorted);
Java
import java.util.*;

public class Sort {
    static List<Integer> mergeSort(List<Integer> list) {
        if (list.size() <= 1) {
            return list;
        }
        int middleIndex = list.size() / 2;
        List<Integer> leftList =
            mergeSort(list.subList(0, middleIndex));
        List<Integer> rightList =
            mergeSort(list.subList(middleIndex, list.size()));
        List<Integer> sortedList = new ArrayList<Integer>();
        int leftIndex = 0;
        int rightIndex = 0;
        int leftLength = leftList.size();
        int rightLength = rightList.size();
        while (leftIndex < leftLength && rightIndex < rightLength) {
            if (leftList.get(leftIndex) < rightList.get(rightIndex)) {
                sortedList.add(leftList.get(leftIndex));
                leftIndex++;
            } else {
                sortedList.add(rightList.get(rightIndex));
                rightIndex++;
            }
        }
        sortedList.addAll(leftList.subList(leftIndex, leftLength));
        sortedList.addAll(rightList.subList(rightIndex, rightLength));
        return sortedList;
    }

    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<Integer>(Arrays.asList(32, 100, 1, 2, 29, 28, 88, 3, 50, 67, 37, 1, 57, 20));
        System.out.println(mergeSort(list));
    }
}
