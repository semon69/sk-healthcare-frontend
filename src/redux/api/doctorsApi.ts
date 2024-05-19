import { TMeta } from "@/types/common";
import { tagTypes } from "../tag_types";
import { baseApi } from "./baseApi";
import { TDoctor } from "@/types/doctor";

const doctorsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createDoctor: build.mutation({
      query: (data) => ({
        url: `/user/create-doctor`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.doctor],
    }),
    getDoctors: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/doctor`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: TDoctor[], meta: TMeta) => {
        return {
          doctors: response,
          meta,
        };
      },
      providesTags: [tagTypes.doctor],
    }),
    deleteDoctor: build.mutation({
      query: (id) => ({
        url: `/doctor/soft/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.doctor],
    }),
  }),
});

export const { useCreateDoctorMutation, useGetDoctorsQuery, useDeleteDoctorMutation } = doctorsApi;
