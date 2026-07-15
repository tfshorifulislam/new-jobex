import React from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';
import { Button } from '../ui/button';
import { SlidersHorizontal } from 'lucide-react';
import JobsFilterWrapper from './JobsFilterWraper';

const FilterContent = ({ filters, setFilters, setAllJobs }) => {
    return (
        <Drawer swipeDirection="left">
            <DrawerTrigger
                render={
                    <Button className="w-full">
                        <SlidersHorizontal className="mr-2 h-4 w-4" />
                        Filters
                    </Button>
                }
            />

            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Filters</DrawerTitle>
                </DrawerHeader>

                <div className="overflow-y-auto p-4">
                    <JobsFilterWrapper
                        filters={filters}
                        setFilters={setFilters}
                        setAllJobs={setAllJobs} />
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default FilterContent;