import {useCallback, useState} from 'react';

const COURSES_URL = 'https://mocki.io/v1/6a9f8e88-45d4-447f-b41a-6333731a8fe7';

export type CourseType = {
    id: string;
    name: string;
    doc_url: string;
};

export type UseGetCoursesType = {
    courses: CourseType[];
    getCourses: () => Promise<CourseType[]>;
};

export const useGetCourses = (): UseGetCoursesType => {
    const [courses, setCourses] = useState<CourseType[]>([]);
    const getCourses = useCallback(() => {
        return fetch(COURSES_URL)
            .then((response) => response.json())
            .then((response) => {
                setCourses(response);
                return response;
            });
    }, []);
    return {
        courses,
        getCourses,
    };
}
