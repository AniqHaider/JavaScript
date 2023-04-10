var merge = function merge(nums1, m, nums2, n){
        // Make a copy of nums1
        const nums1Copy = nums1.slice(0, m);
        nums1.length = 0;
      
        // Two pointers for nums1_copy and nums2
        let i = 0;
        let j = 0;
      
        // Compare elements from nums1_copy and nums2
        // and add the smallest one into nums1
        while (i < m && j < n) {
          if (nums1Copy[i] < nums2[j]) {
            nums1.push(nums1Copy[i]);
            i += 1;
          } else {
            nums1.push(nums2[j]);
            j += 1;
          }
        }
      
        // If there are still elements in nums1_copy or nums2,
        // add them to nums1
        if (i < m) {
          nums1.push(...nums1Copy.slice(i));
        }
        if (j < n) {
          nums1.push(...nums2.slice(j));
        }
      }