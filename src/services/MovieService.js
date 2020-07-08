import axios from "axios";
import { domain, groupID } from "../settings/config";

export class MovieService {
  getMovie = () => {
    return axios({
      url: `${domain}/QuanLyPhim/LayDanhSachPhim?maNhom=${groupID}`,
      method: "GET",
    });
  };
  getScheduleMoive = (maPhim) => {
    return axios({
      url: `${domain}/QuanLyRap/LayThongTinLichChieuPhim?maPhim=${maPhim}`,
      method: "GET",
    });
  };
}

export const movieService = new MovieService();
