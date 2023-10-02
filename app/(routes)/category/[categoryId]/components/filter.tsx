"use client";

import qs from "query-string";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FilterProps {
  valueKey: string;
  name: string;
  data: (Size | Color)[];
}

const Filter: React.FC<FilterProps> = ({ valueKey, name, data }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Getting the selected value

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    // Getting the current query params
    const current = qs.parse(searchParams.toString());
    // Updating the query params with the new value for the selected filter type
    const query = {
      ...current,
      [valueKey]: id,
    };

    // If the selected value is already selected, remove the filter type from the query params
    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    // Updating the URL with the new query params and removing the null values from the query params object before stringifying it to avoid having null values in the URL query params string (e.g. ?sizeId=null)
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {
          // Rendering the filter options
          data.map(filter => (
            <div key={filter.id} className="flex items-center">
              <Button
                className={cn(
                  "rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300",
                  selectedValue === filter.id && "bg-gray-800 text-white",
                )}
                onClick={() => onClick(filter.id)}
              >
                {filter.name}
              </Button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Filter;
